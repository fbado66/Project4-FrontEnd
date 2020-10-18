import React, {Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import HomePage from './HomePage'
import Header from "./Header"


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
       <SearchBar /> 
      </div>
    );
  }
}

export default App;
