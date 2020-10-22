import React from 'react'
import ReservationForm from '../ReservationForm'
import ReviewForm from '../ReviewForm'

const SingularListing = (props) => {
    let {token, catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, reviews, price} = props.listingPojo
    console.log('SINGULAR LISTING')
    console.log(props.token)

    let tokenCheck = () => {
        if (props.token) {
            return ( <div>
                        <ReservationForm listing = {props.listingPojo} token = {props.token} /> 
                        <ReviewForm listing = {props.listingPojo} token = {props.token} />
                    </div> ) 
        } else {
            return ( <button> <div>Make a reservation</div></button> )
        }
    }


    return (
        <div>
            
        

        <div className="grid-container">
        <div className="Image-1"><img src ={image_1_url} alt=''/></div>
        <div className="image-2"><img src ={image_2_url} alt=''/></div>
        <div className="image-3"><img src ={image_3_url} alt=''/></div>
        <div className="image-4"><img src ={image_4_url} alt=''/></div>
        <div className="image-5"><img src ={image_5_url} alt=''/></div>
        </div>


        













           <h1>{catch_phrase}</h1> 
            <h2>{title}</h2>
            <h6>{description}</h6>
            <p>{details}</p>
            <p>{host_info}</p>
            {/* <img src = {image_1_url} />
            <img src = {image_2_url} />
            <img src = {image_3_url} />
            <img src = {image_4_url} />
            <img src = {image_5_url} /> */}
            <p>$ {price}.00 / night</p>

            
                {/* <ReservationForm
                listing = {props.listingPojo}
                token = {props.token} 
            />  */}

            
        {tokenCheck()}
            
            
         </div> 
    )
}

export default SingularListing