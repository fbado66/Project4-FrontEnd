import React from 'react'
import ReservationForm from '../ReservationForm'
import Carousel from 'react-bootstrap/Carousel'

const SingularListing = (props) => {
    let { catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, reviews, price} = props.listingPojo

    return (
        <div>




        <Carousel>
            <Carousel.Item>
                    <img src = {image_1_url} alt =''/>
                <Carousel.Caption>
                    <h3>First Image</h3>
                    <p>book this place</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img src = {image_2_url} alt =''/>
                <Carousel.Caption>
                    <h3>second Image</h3>
                    <p>book this place</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img src = {image_3_url} alt =''/>
                <Carousel.Caption>
                    <h3>Third Image</h3>
                    <p>book this place</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img src = {image_4_url} alt =''/>
                <Carousel.Caption>
                    <h3>Fourth Image</h3>
                    <p>book this place</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img src = {image_5_url} alt =''/>
                <Carousel.Caption>
                    <h3>Fifth Image</h3>
                    <p>book this place</p>
                </Carousel.Caption>
            </Carousel.Item>






       
       

        </Carousel>




















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

            <ReservationForm
                listing = {props.listingPojo}
                token = {props.token} 
            /> 
         </div> 
    )
}

export default SingularListing