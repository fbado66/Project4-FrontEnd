import React, {Component } from 'react'
import CategoryList from './CategoryList'


class HomePage extends Component {

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

      
      

    render () {


       

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
                    
    
                    <CategoryList 
                    categories = {this.state.categories} 
                    />

                    
                    
                    
                     
                </div>
    
            </div>
        )
    }
    

}

export default HomePage