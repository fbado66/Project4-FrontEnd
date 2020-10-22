import React, {Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import HomePage from './HomePage'
import Header from "./Header"
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'
import ProfileContainer from './ProfileContainer'

import ListingCnt from './ListingComponents/ListingCnt'
import SingularListing from "./ListingComponents/SingularListing"
import Footer from './ListingComponents/Footer'
import NotFound from './NotFound'

import { Route, Switch, Link, withRouter, Redirect} from 'react-router-dom'

class App extends Component {

  state = {
    id: 0,
    username: "",
    categories: [],
    reservations: [],
    reviews: [],
    token: ""
}

 // ----SETTING STATE FOR CATEGORIES AS WELL AS CHECKING ON USER IF LOGGED IN -----

componentDidMount(){
  fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then((arrayOfCategories) => {
        this.setState( {
          categories: arrayOfCategories
        })
      })

    if(localStorage.token){
        fetch("http://localhost:3000/users/keep_logged_in", {
          method: "GET",
          headers: {
          "Authorization": localStorage.token
          }
        })
        .then(res => res.json())
        .then(this.helpHandleResponse)
    }
}


handleLogOut = () => {
  this.setState({
    id: 0,
    username: "",
    reservations: [],
    reviews: [],
    token: ""
  })
  localStorage.clear()
}

// -------------LOGIN USER -----------------------

handleLoginSubmit = (userInfo) => {
  console.log("Login form has been submitted")

  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      username: userInfo.username,
      password: userInfo.password
    })
  })
    .then(res => res.json())
    .then(this.helpHandleResponse)
}

// ---------------- NEW USER -----------------------
handleRegisterSubmit = (userInfo) => {
  console.log("Register form has been submitted")

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      username: userInfo.username,
      password: userInfo.password,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      email: userInfo.email,
      phone: userInfo.phone,
      location: userInfo.location
    })
  })
  .then(res => res.json())
  .then(this.helpHandleResponse)

}


helpHandleResponse = (resp) => {
  if(resp.error){
    console.error(resp.error)
  } else {
    localStorage.token = resp.token
    this.setState({
      id: resp.user.id,
      username: resp.user.username,
      reservations: resp.user.reservations,
      reviews: resp.user.reviews,
      token: resp.token
    })
    this.props.history.push("/profile")
  }
}

renderForm = (routerProps) => {
  if(this.state.token){
    return <button onClick={this.handleLogOut}>Log Out</button>
  }

  if(routerProps.location.pathname === "/login"){
    return <LogInForm
      formName="Login Form"
      handleSubmit={this.handleLoginSubmit}
          />
  } else if (routerProps.location.pathname === "/register") {
    return <RegisterForm
      formName="Register Form"
      handleSubmit={this.handleRegisterSubmit}
          />
  }
}

renderProfile = (routerProps) => {
  if(this.state.token){
    return <div>
              <ProfileContainer 
                username={this.state.username} 
                reservations={this.state.reservations} 
                reviews={this.state.reviews}
                id={this.state.id}
              />
           </div> 
  } else {
    return <Redirect to="/login" />
  }

}



  renderSpecificCategory = (routerProps) => {
    let givenUrl = routerProps.match.params.id 
    let foundCategory = this.state.categories.find((categoryPojo) => {
      return categoryPojo.id === parseInt(givenUrl)
    })
    if (foundCategory) {
        return <ListingCnt category = {foundCategory} />
    } else {
        return <NotFound />
    }
  }


  renderSpecificListing = (routerProps) => {
    let listingCat = routerProps.match.params.id
    let listingUrl = routerProps.match.params.listing_id 
      let foundCategory = this.state.categories.find((categoryPojo) => {
          return categoryPojo.id === parseInt(listingCat)     
    })
      if (foundCategory) {
      let foundListing = foundCategory.listings.find((listingPojo) => {
        return listingPojo.id === parseInt(listingUrl)
      })
        if (foundListing) { 
        return <SingularListing 
        listingPojo = {foundListing}
        token = {this.state.token}
              />
        }
      } else {
        return <NotFound />
      }
  }


  
  render() {

    let arrayOfLinks = this.state.categories.map((categoryPojo) => {
      return (
          <Link
          key = {categoryPojo.id}
          to = {`/categories/${categoryPojo.id}`}>
              {<div className = 'render-categroyCard'>
                  <img className = 'category-image' src ={categoryPojo.image_url} alt=''/>
                  <h1 className ='categoryCard-text'>{categoryPojo.title}</h1>
                  <p className ='categoryCard-text' >{categoryPojo.content}</p>
              </div>}
          </Link>
      )
  })

    


  return (
    <div className="App">    
      <SearchBar /> 
        <main>
          <Header />
            <Switch>
              <Route path="/login" render={ this.renderForm } />
              <Route path="/register" render={ this.renderForm } />
              <Route path="/profile" render={ this.renderProfile } />

              <Route path="/categories/:id" exact render = {this.renderSpecificCategory} />
              <Route path="/categories/:id/listings/:listing_id" exact render = {this.renderSpecificListing} />
              <Route path="/" exact component = {HomePage} />
              
              <Route component = {NotFound} />
            </Switch>
        
        </main>

        <aside>
          <ul className = 'categoryCard-holder'>
            {arrayOfLinks}
          </ul>
        </aside>  

      <Footer /> 

    </div>
    );
  }
}

export default withRouter(App)
