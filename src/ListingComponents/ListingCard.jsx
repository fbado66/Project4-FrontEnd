import React from 'react'

const ListingCard = () => {
    console.log("hello from ListingCard")

// let handleClick = () => {
//     console.log(props.listing)
// }

    // let {title, catch_phrase, details, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, price, description, host_info, reviews} = props.listing
    // let reviewArray = reviews.map((review) => {
    //     return review
    // })
    return (
        <div className = 'card-listing'>
            <p>HEllo </p>
            
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

export default ListingCard