import React, {Component } from 'react';
import { withRouter} from 'react-router-dom'
import ReservationForm from '../ReservationForm';
// import Card from 'react-bootstrap/Card'



const ListingPerCategory = (props) => {


let handleClick = () => {
    props.history.push(`/categories/${props.category_id}/listings/${props.listing.id}`)
}

    let {title, catch_phrase, details, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, price, description, host_info, reviews} = props.listing
    let reviewArray = reviews.map((review) => {
        return review
    })

    return (
        <div className = 'card-listing'>


            <div className ='card-listings'>
                 <img 
            onClick = {handleClick} src={image_1_url} />
                        <div className="card__info">
                            <h2>{catch_phrase}</h2>
                            <h4> {description} </h4>
                            <h3> ${price}.00 / night </h3>
                            <p>Host: {host_info}</p>

                        </div>
            </div>


           
        </div>
    )
};
 export default withRouter(ListingPerCategory)