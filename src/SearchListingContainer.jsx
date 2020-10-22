import React from 'react'
import Listing from "./Listing"

const SearchListingContainer = (props) => {

    let arrayOfListings = props.listings.map(singularListing => {
        return <Listing 
                key={singularListing.id}
                listing = {singularListing}
                />
    })

    return (
        <ul>
            {arrayOfListings}
        </ul>
    )
}

export default SearchListingContainer