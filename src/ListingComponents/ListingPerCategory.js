import React, {Component } from 'react';
// import { Link} from 'react-router-dom'
import SingularListing from './SingularListing';
import NotFound from '../NotFound'
import { Route, Switch, Link, withRouter, Redirect} from 'react-router-dom'



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
        } else {
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
                to = {`/listings/${listingPojo.id}`}>
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
            <div>
                <div className = 'card'>
                    <img 
                        onClick = {this.handleClick}
                        src={image_1_url}
                        alt='' />
                    <div className = 'card-info'>
                        <h1>{catch_phrase}</h1>
                        <p>{title}</p>
                        <p>${price} / night</p>
                    </div>
                    
                </div>

                <Switch>            
                <Route path="/listings/:id" render = {this.renderSpecificListing} />
                <Route component = {NotFound} />
                </Switch>

                {/* <aside>
                    <ul className = 'categoryCard-holder'>
                    {arrayOfListings}
                    </ul>
                </aside>   */}


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