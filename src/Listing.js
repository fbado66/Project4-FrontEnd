import React from 'react';

const Listing = (props) => {
    let {title, catch_phrase, details, image_1_url, price, description, host_info, reviews} = props.listings
    return (
        <div>
            <h1>{catch_phrase}</h1>
            <img src={image_1_url} />
            <p>{price}</p>
            <p>{description}</p>
            <p>{title}</p>


        </div>
    )
};

export default Listing