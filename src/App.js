import React, {Component } from 'react';
import './App.css';
import SearchBar from "./SearchBar.jsx";
import HomePage from './HomePage'
import Header from "./Header"
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'
import ProfileContainer from './ProfileContainer'
import ListingSearched from "./ListingSearched"

import ListingCnt from './ListingComponents/ListingCnt'
import SingularListing from "./ListingComponents/SingularListing"
import Footer from './ListingComponents/Footer'
import CategoryMainPage from './CategoryMainPage'
import NotFound from './NotFound'
import Category from "./Category"

import { Route, Switch, Link, withRouter, Redirect} from 'react-router-dom'
import ReservationForm from './ReservationForm';
import SearchListingContainer from './SearchListingContainer';
import SearchResult from './SearchResult';
import ReviewForm from './ReviewForm';

class App extends Component {

  state = {
    id: 0,
    username: "",
    categories: [],
    reservations: [],
    searchListing: '',
    reviews: [],
    token: "",
    location: "",
    
  
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




//---- search bar function -------

renderSearchResult =() => { 

  let {searchListing} = this.state
  let allListings = [];
    this.state.categories.forEach(categoriesObjs => {
      allListings = [...allListings, ...categoriesObjs.listings]
      allListings.filter((listing) => {
        // console.log(searchListing.toLowerCase())
        // console.log(listing.title.toLowerCase())
        // this.props.history.push(`/search/${listing.id}`)
        return  listing.title.toLowerCase().includes(searchListing.toLowerCase())
      })
          // this.setState ({
          //  taco: some 
          // })

    })

  // console.log(allListings)
}

 // filter function for the search bar
 changeBasedOnInput = (listingsearch) =>{
  this.setState({ 
  searchListing: listingsearch
  })
}





helpHandleResponse = (resp) => {
  if(resp.error){
    console.error(resp.error)
  } else {
    localStorage.token = resp.token
    this.setState({
      id: resp.user.id,
      first_name: resp.first_name,
      last_name: resp.last_name,
      email: resp.email,
      username: resp.user.username,
      reservations: resp.user.reservations,
      reviews: resp.user.reviews,
      token: resp.token,
      location: resp.location,
      phone: resp.phone
    })
    this.props.history.push("/profile")
  }
}

renderForm = (routerProps) => {
  if(this.state.token){
    return <button className='logout' onClick={this.handleLogOut}>We hope to catch with you soon</button>
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
                deleteReviewsFromState = {this.deleteReviewsFromState}
                updateReviewFromState = {this.updateReviewFromState}
                
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


  addReviewsToState = (newlyCreatedReview) => {
    let copyOfReviews = [...this.state.reviews, newlyCreatedReview]
    this.setState({
      reviews: copyOfReviews
    })
  }

  updateReviewFromState = (updatedObj) => {
    let copyOfReviews = this.state.reviews.map((review) => {
      if(review.id === updatedObj.id){
        return updatedObj
      } else {
        return review
      }
    })

    this.setState({
      reviews: copyOfReviews
    })

  }


  deleteReviewsFromState = (deletedID) => {
    let copyOfReviews = this.state.reviews.filter(reviewObj => {
      return reviewObj.id !== deletedID
    })
    this.setState({
      reviews: copyOfReviews
    })
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
        review = {this.state.reviews}
        addReviewsToState = {this.addReviewsToState}
        updateReviewFromState = {this.updateReviewFromState}

        // deleteReviewsFromState = {this.deleteReviewsFromState}
        />
        }
      } else {
        return <NotFound />
      }
  }

  allcats = () => {
    let arrayOfLinks = this.state.categories.map((categoryPojo) => {
      return (
        <Link
        key = {categoryPojo.id}
        to = {`/categories/${categoryPojo.id}`}>
            {<div className = 'render-categroyCard'>
                <img className = 'category-image' src ={categoryPojo.image_url} alt=''/>
                <h3 className ='categoryCard-text'>{categoryPojo.title}</h3>
                <p className ='categoryCard-text' >{categoryPojo.content}</p>
            </div>}
        </Link>
      )
    })
    return (
      <HomePage
      cats = {arrayOfLinks}
      />
    )
}



addReservationsToState = (newlyCreatedReservation) => {
  let copyOfReservations = [...this.state.reservations, newlyCreatedReservation]
  this.setState({
    reservations: copyOfReservations
  })
}





  
  render() {

    this.renderSearchResult()




    

  return (
    <div className="App">    
    {/* <SearchResult /> */}
      {/* <SearchBar />  */}
      
        <main>
          <Header 
            changeBasedOnInput = {this.changeBasedOnInput} 
          />
          
              {/* <CategoryMainPage cats = {arrayOfLinks} /> */}

            <Switch>
              <Route path="/login" render={ this.renderForm } />
              <Route path="/register" render={ this.renderForm } />
              <Route path="/profile" render={ this.renderProfile } />

              <Route path="/search/:id" render={this.renderSearchResult} />

             

              <Route path="/categories/:id" exact render = {this.renderSpecificCategory} />
              <Route path="/categories/:id/listings/:listing_id" exact render = {this.renderSpecificListing} />
              {/* <Route path="/" exact component = {HomePage} /> */}
              <Route path="/" exact render = {this.allcats} />

              
              <Route component = {NotFound} />
            </Switch>
            
        
        </main>

        <aside>
          
        </aside>  

      <Footer /> 

    </div>
    );
  }
}

export default withRouter(App)
