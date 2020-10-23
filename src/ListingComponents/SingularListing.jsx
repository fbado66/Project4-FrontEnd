import React from 'react'
import ReservationForm from '../ReservationForm'
import ReviewForm from '../ReviewForm'
import HouseIcon from '@material-ui/icons/House';
import StarIcon from '@material-ui/icons/Star';
import DialpadIcon from '@material-ui/icons/Dialpad';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {Link} from 'react-router-dom'
import ReviewOnListing from "../ReviewOnListing"
import ReviewForListings from '../ReviewForListings';
import ReviewCard from '../ReviewCard'




const SingularListing = (props) => {

    console.log(props)
    let {token, catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, price} = props.listingPojo
    let reviewArray = props.review.map(reviewPojo => {
        return <div className = 'holder-review-result'>
                    <p className='nickname-review'>Nickname: {reviewPojo.nickname}</p>
                    <div className='content-likes'>
                        <p className='content-review'>{reviewPojo.content}</p>
                        <p className='likes-review'>likes: {reviewPojo.likes}</p>
                    </div>
                </div>
    })

 
    let tokenCheck = () => {
        if (props.token) {
            return ( <div>
                        <ReviewForListings />
                        <ReservationForm listing = {props.listingPojo} token = {props.token} /> 
                        <ReviewForm 
                            listing ={props.listingPojo} 
                            token ={props.token} 
                            addReviewsToState ={props.addReviewsToState} 
                            updateReviewFromState = {props.updateReviewFromState}
                        />
                    </div> ) 
        } else {
            return (   <div className = 'makeReservation' ><Link to="/login" >Make a Reservation</Link> </div> )

        }
    }


    return (
        <div>
            
            <h1 className= 'listing-cathPhrase'>{catch_phrase}</h1> 
            <br/>
             <h2 className= 'listing-title'>{title}</h2>

        <div className="grid-container">
        <div className="Image-1"><img src ={image_1_url} alt=''/></div>
        <div className="image-2"><img src ={image_2_url} alt=''/></div>
        <div className="image-3"><img src ={image_3_url} alt=''/></div>
        <div className="image-4"><img src ={image_4_url} alt=''/></div>
        <div className="image-5"><img src ={image_5_url} alt=''/></div>
        </div>


        <div className='utilities'>
            <p className = 'listing-price'>Price: ${price}.00 / night</p>

            <div className='section'>
            <HouseIcon/> <div className='sub-section'>
                        <p className = 'sub-header'>Entire home</p>
                        <p>You'll have the place to yourself</p>
                        </div>
            </div>
            <div className='section'>
            <StarIcon/> <div className='sub-section'>
                        <p className = 'sub-header'>Enhanced Clean</p>
                        <p>This host committed to Airbnb's 5-step enhanced cleaning process. Learn more</p>
                        </div>
            </div>
            <div className='section'>
            <DialpadIcon/> <div className='sub-section'>
                        <p className = 'sub-header'>Self Check-in</p>
                        <p>Check yourself in with the keypad.</p>
                        </div>
            </div>
            <div className='section'>
            <EventNoteIcon/> <div className='sub-section'>
                        <p className = 'sub-header'>Cancellation Policy</p>
                        <p>Add your trip dates to get the cancellation details for this stay.</p>
                        </div>
            </div>
            
        </div>
           
        <p className = 'listing-description'>{description}</p>
        <div className = 'space'>The Space -- </div>
        <p className = 'listing-details'>{details}</p>
        <div className = 'space2'> Contact the Host </div>
        <p className = 'listing-details'>{host_info}</p>



            
               
            
        {tokenCheck()}

        <div> 
            <h3>Reviews </h3>

            <ReviewCard />
            {/* <ReviewOnListing /> */}

            {reviewArray}
            {/* <ReviewForListings /> */}
            
        </div>
            
            
         </div> 
    )
}

export default SingularListing