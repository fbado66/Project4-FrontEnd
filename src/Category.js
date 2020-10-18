import React from 'react'
import Listing from './Listing'


const Category = (props) => {
    
    let arrayOfListings = props.listings.map((listing) => {
        return <Listing 
                key = {listing.id}
                listings = {listing}
                />
    })
    return (
        <div >
            <div className ='card-category'>
                <img src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480' />
                <h1>Unique Stays</h1>
                <p>Spaces that are more than just a place to sleep</p>
                {arrayOfListings}
            </div>
            

        </div>
    )
}

export default Category;