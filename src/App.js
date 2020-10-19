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
          <NavLink
          key = {categoryPojo.id}
          to = {`/category/${categoryPojo.id}`}>
              {categoryPojo.title}
          </NavLink>
      )
  })

  return (
    <div className="App">    
      <SearchBar /> 
      <Header />
        {/* <HomePage /> */}
        <aside>
          <ul>
            {arrayOfLinks}
          </ul>
        </aside>

        <main>
          <Switch>
            <Route path="/" exact component = {HomePage} />
            <Route path="/category/:id" render = {this.renderSpecificCategory} />
            <Route component = {NotFound} />
          </Switch>
        </main>
    </div>
    );
  }
}

export default App;
