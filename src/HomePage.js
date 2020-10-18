import React, {Component } from 'react'
import Category from './Category'

class HomePage extends Component {

    state = {
        listings: []
    }
    
    
    componentDidMount(){
        fetch("http://localhost:3000/listings")
          .then(res => res.json())
          .then((arrayOfListings) => {
            this.setState( {
              listings: arrayOfListings
            })
          })
      }

    render () {
        // console.log(this.state.listings)
        return (
            <div>
                <h1> Home Component</h1>
                <div className ='home-image'>
                    <div className="hero-text">
                        <h1>Go Near</h1>
                        <p>Settle in somewhere new. Discover stays to live, work, or just relax</p>
                    </div>
                </div>
                <div className = 'category-homepage'>
                  
                    
                    <Category 
                    listings = {this.state.listings} 
                    />
                     
                </div>
    
            </div>
        )
    }
    

}

export default HomePage