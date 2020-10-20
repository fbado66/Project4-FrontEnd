import React, {Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import HomePage from './HomePage'
import NavBar from './NavBar'
import Header from "./Header"
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'
import ProfileContainer from './ProfileContainer'

import ListingCnt from './ListingComponents/ListingCnt'
import NotFound from './NotFound'

import { Route, Switch, Link, withRouter, Redirect} from 'react-router-dom'


class App extends Component {

  state = {
    id: 0,
    username: "",
    categories: [],
    reservations: [],
    reviews: []

}
 

  // ------- logging a user ------------------

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
    .then((response) => {
      if(response.error){
        console.error(response.error)
      } else {

        this.setState({
          id: response.id,
          username: response.username,
          reservations: response.reservations,
          reviews: response.reviews
          
        })
        this.props.history.push("/profile")
      }
    })

}


 // ------------- register a user --------------------------
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
  .then(resp => {
    if(resp.error){
      console.error(resp.error)
    } else {

      this.setState({
        id: resp.id,
        username: resp.username,
        reservations: resp.reservations,
        reviews: resp.reviews
      })
      this.props.history.push("/profile")
    }
  })

}


renderForm = (routerProps) => {
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
  // return <Redirect/> in render of <Route/>
  if(this.state.id){
    return <ProfileContainer 
      username={this.state.username} 
      reservations={this.state.reservations} 
      reviews={this.state.reviews}
      id={this.state.id}
    />
  } else {
    return <Redirect to="/login" />
  }

}



componentDidMount(){
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then((arrayOfCategories) => {
        this.setState( {
          categories: arrayOfCategories
        })
      })
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
  console.log(this.state)
  return (
    <div className="App">    
      <SearchBar /> 
      <Header />

        <main>
          <NavBar />
          <Switch>
            <Route path="/login" render={ this.renderForm } />
            <Route path="/register" render={ this.renderForm } />
            <Route path="/profile" render={ this.renderProfile } />

            <Route path="/" exact component = {HomePage} />
            <Route path="/categories/:id" render = {this.renderSpecificCategory} />
            <Route component = {NotFound} />
          </Switch>
        </main>

        <aside>
          <ul className = 'categoryCard-holder'>
            {arrayOfLinks}
          </ul>
        </aside>   

    </div>
    );
  }
}

let magicalComponent = withRouter(App)
export default magicalComponent
