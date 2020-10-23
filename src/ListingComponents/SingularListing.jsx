import React from 'react'
import ReservationForm from '../ReservationForm'
import ReviewForm from '../ReviewForm'
import HouseIcon from '@material-ui/icons/House';
import StarIcon from '@material-ui/icons/Star';
import DialpadIcon from '@material-ui/icons/Dialpad';
import EventNoteIcon from '@material-ui/icons/EventNote';

const SingularListing = (props) => {
    let {token, catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, reviews, price} = props.listingPojo
    let reviewArray = reviews.map(reviewPojo => {
        return <li>
            {reviewPojo.content}
                </li>
    })

  

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

        <div> 
            <h3>Reviews </h3>

            {reviewArray}
            <p></p>
        </div>
            
            
         </div> 
    )
}

export default SingularListing