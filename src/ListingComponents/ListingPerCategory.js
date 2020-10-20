import React, {Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import SingularListing from './SingularListing';
import NotFound from '../NotFound'


class ListingPerCategory extends Component {

    state = {
        listing: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/listings")
          .then(res => res.json())
          .then((arrayOfListings) => {
            this.setState( {
                
              listing: arrayOfListings
            })
          })
      }
    
      
      renderSpecificListing = (routerProps) => {
        let listingUrl = routerProps.match.params.id 
        let foundListing = this.state.listing.find((listingPojo) => {
          return listingPojo.id === parseInt(listingUrl)
        })
        if (foundListing) {
            return <SingularListing
             title = {foundListing.title}
             image_1_url = {foundListing.image_1_url} 
             listing = {foundListing} />
        } 
         else {
             return <NotFound />
        }
      }

    handleClick = () => {
            console.log(this.props.listing)
        }

    render(){


        let arrayOfListings = this.state.listing.map((listingPojo) => {
            return (
                <Link
                key = {listingPojo.id}
                to = {`/category/${listingPojo.id}`}>
                    {<div className = 'render-categroyCard'>
                        <img className = 'category-image' src ={listingPojo.image_1_url}/>
                        <h1 className ='categoryCard-text'>{listingPojo.title}</h1>
                        <p className ='categoryCard-text' >{listingPojo.price}</p>
                    </div>}
                </Link>
            )
        })


        let {id, title, catch_phrase, details, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, price, description, host_info, reviews} = this.props.listing 
        
    return (
        <div className = 'card-listing'>

            
            <img 
            onClick = {this.handleClick} src={image_1_url} />
            <h1>{catch_phrase}</h1>
            <p>{title}</p>
            {/* <img src={image_2_url} />
            <img src={image_3_url} />
            <img src={image_4_url} />
            <img src={image_5_url} /> */}
            {/* <p>{details}</p>
            <p>${price} .00</p>
            <p>Description: {description}</p>
            <p>Host Info: {host_info}</p> */}

            {/* <Link
            key = {id}
            to = {`/listings/${id}`}>
                {<div className = 'render-categroyCard'>
                    <img className = 'category-image' src ={image_1_url}/>
                    <h1 className ='categoryCard-text'>{price}</h1>
                    <p> {title}</p>
                </div>}
            </Link> */}
            {/* <Switch>
            <Route path="/listings/:id" render = {this.renderSpecificListing} />
          </Switch> */}



          {/* <main>
          <Switch>
          <Route path="/listings/:id" render = {this.renderSpecificListing} />
            <Route component = {NotFound} />
          </Switch>
        </main>
        <aside>
          <ul >
            {arrayOfListings}
          </ul>
        </aside> */}







        </div>
    )
    }

}

// const ListingPerCategory = (props) => {

// let handleClick = () => {
//     console.log(props.listing)
// }

//     let {title, catch_phrase, details, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, price, description, host_info, reviews} = props.listing
//     let reviewArray = reviews.map((review) => {
//         return review
//     })
//     return (
//         <div className = 'card-listing'>
            
//             <img 
//             onClick = {handleClick} src={image_1_url} />
//             <h1>{catch_phrase}</h1>
//             <p>{title}</p>
//             {/* <img src={image_2_url} />
//             <img src={image_3_url} />
//             <img src={image_4_url} />
//             <img src={image_5_url} /> */}
//             {/* <p>{details}</p>
//             <p>${price} .00</p>
//             <p>Description: {description}</p>
//             <p>Host Info: {host_info}</p> */}
//         </div>
//     )
// };

export default ListingPerCategory