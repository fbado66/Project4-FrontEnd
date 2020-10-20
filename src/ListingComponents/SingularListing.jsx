import React from 'react'; 
import ListingCard from './ListingCard'

export default class extends React.Component {
    
    render () {
        let {listing} = this.props
        // let arrayOfListings = listing.map((listing) => {
            return (
            <div>
                <ListingCard 
                    key = {listing.id}
                    listing = {listing}
                    />
                </div>
                )
       

    //     return (
    //         <article>
    //             {arrayOfListings}
    //         </article>
    //     )
    // }
}
}