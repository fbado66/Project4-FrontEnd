import React, {Component } from 'react';
import { withRouter} from 'react-router-dom'
import ReservationForm from '../ReservationForm';
import Card from 'react-bootstrap/Card'



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



    {/* <Card onClick = {handleClick} >
        <Card.Img variant="top" src={image_1_url} />
            <Card.Body>
                <Card.Title>{catch_phrase}</Card.Title>
                <Card.Text>{title}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
    </Card> */}
  
  
    
  

            



















            <div className ='card-listings'>
                 <img 
            onClick = {handleClick} src={image_1_url} />
                        <div className="card__info">
                            <h2>{catch_phrase}</h2>
                            <h4> {description} </h4>
                            <h3> {price} </h3>
                        </div>
            </div>


           
        </div>
    )
};
 export default withRouter(ListingPerCategory)