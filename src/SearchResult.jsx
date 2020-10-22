import React, {Component} from 'react';
import SearchBar from "./SearchBar";
// import SearchListingContainer from './SearchListingContainer'

class SearchResult extends Component {

state = {
    listings: [],
    searchTerm: ''
}

componentDidMount() {
    fetch('http://localhost:300/listings')
    .then(res => res.json())
    .then((arrayOfListings) => {
      this.setState( {
        listings: arrayOfListings
      })
    })
  }
    // filter function for the search bar
    changeBasedOnInput = (chosenFilter) =>{
        this.setState({ 
        searchTerm: chosenFilter
        })
    }
  
    render () {
        let {listings, searchTerm} = this.state

    let filteredArray = listings.filter((listing) => {
      return listing.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

        return (
            <div>
                <SearchBar
                    searchTerm = {this.state.searchTerm}
                    changeBasedOnInput = {this.changeBasedOnInput} />
                {/* <SeachListingContainer 
                    listing ={filteredArray} /> */}
            </div>
        )
    }
}

export default SearchResult 