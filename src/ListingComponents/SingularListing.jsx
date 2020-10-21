import React from 'react'
import ReservationForm from '../ReservationForm'

const SingularListing = (props) => {
    let { catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, reviews, price} = props.listingPojo

    return (
        <div>
           <h1>{catch_phrase}</h1> 
            <h2>{title}</h2>
            <h6>{description}</h6>
            <p>{details}</p>
            <p>{host_info}</p>
            <img src = {image_1_url} />
            <img src = {image_2_url} />
            <img src = {image_3_url} />
            <img src = {image_4_url} />
            <img src = {image_5_url} />
            <p>$ {price}.00 / night</p>

            <ReservationForm
                listing = {props.listingPojo}
                token = {props.token} 
            /> 
         </div> 
    )
}

export default SingularListing