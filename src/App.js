import React, {Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import HomePage from './HomePage'
import Header from "./Header"

import ListingCnt from './ListingComponents/ListingCnt'
import NotFound from './NotFound'


// import { UniqueStay } from './ListingComponents';

import { Route, Switch, Link, NavLink } from 'react-router-dom'


class App extends Component {

  state = {
    categories: []
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
        return <ListingCnt title = {foundCategory.title} content = {foundCategory.content} category = {foundCategory} />
    } else {
        return <NotFound />
    }
  }

  render() {

    let arrayOfLinks = this.state.categories.map((categoryPojo) => {
      return (
          <Link
          key = {categoryPojo.id}
          to = {`/category/${categoryPojo.id}`}>
              {<div className = 'render-categroyCard'>
                  <img className = 'category-image' src ={categoryPojo.image_url}/>
                  <h1 className ='categoryCard-text'>{categoryPojo.title}</h1>
                  <p className ='categoryCard-text' >{categoryPojo.content}</p>
              </div>}
          </Link>
      )
  })

  return (
    <div className="App">    
      <SearchBar /> 
      <Header />
        {/* <HomePage
         taco = {this.renderSpecificCategory} /> */}
         <main>
          <Switch>
            <Route path="/" exact component = {HomePage} />
            <Route path="/category/:id" render = {this.renderSpecificCategory} />
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

export default App;
