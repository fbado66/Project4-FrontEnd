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

    // console.log(props.listing)
    return (
        <div className = 'card-listing'>



    <Card onClick = {handleClick} >
        <Card.Img variant="top" src={image_1_url} />
            <Card.Body>
                <Card.Title>{catch_phrase}</Card.Title>
                <Card.Text>{title}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
    </Card>
  
  
    
  

            






















            {/* <img 
            onClick = {handleClick} src={image_1_url} />
            <h1>{catch_phrase}</h1>
            <p>{title}</p> */}
            {/* <img src={image_2_url} />
            <img src={image_3_url} />
            <img src={image_4_url} />
            <img src={image_5_url} /> */}
            {/* <p>{details}</p>
            <p>${price} .00</p>
            <p>Description: {description}</p>
            <p>Host Info: {host_info}</p> */}
        </div>
    )
};
 export default withRouter(ListingPerCategory)