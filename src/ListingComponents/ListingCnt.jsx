import React from 'react'; 
import ListingPerCategory from './ListingPerCategory'
import CardDeck from 'react-bootstrap/CardDeck';


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
            
                <CardDeck>
                {arrayOfListings}
                </CardDeck>
            
        )
    }
}