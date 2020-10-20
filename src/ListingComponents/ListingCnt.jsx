import React from 'react'; 
import ListingPerCategory from './ListingPerCategory'

export default class extends React.Component {
    
    render () {
        let {category} = this.props
        let arrayOfListings = category.listings.map((listing) => {
            return <ListingPerCategory 
                    key = {listing.id}
                    listing = {listing}
                    />
        })

        return (
            <article className = 'render-all-listings'>
                {arrayOfListings}
            </article>
        )
    }
}