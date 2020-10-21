import React from 'react'; 
import ListingPerCategory from './ListingPerCategory'

export default class extends React.Component {
    
    render () {
        let {category} = this.props
        
        let arrayOfListings = category.listings.map((listing) => {
            // console.log(category)
            return <ListingPerCategory 
                    key = {listing.id}
                    listing = {listing}
                    category_id ={category.id}
                    />
        })

        return (
            <article className = 'render-all-listings'>
                {arrayOfListings}
            </article>
        )
    }
}