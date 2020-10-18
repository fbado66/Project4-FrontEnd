import React, {Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';


class App extends Component {


  componentDidMount(){

    fetch("http://localhost:3000/listings")
      .then(res => res.json())
      .then((response) => {
        console.log(response)
        })
    


  }

  render() {
    return (
      <div className="App">
       <SearchBar />
        
      </div>
    );
  }
}

export default App;
