import { RecordVoiceOverTwoTone } from '@material-ui/icons';
import React, { Component } from 'react';
import SingularListing from './ListingComponents/SingularListing';
import ReservationForm from './ReservationForm';
import UserReservationContainer from './UserReservationContainer'
import UserReviewContainer from './UserReviewContainer'
import ReviewsForListings from './ReviewForListings'



class ProfileContainer extends Component {

  

  render() {
  
    let {id, location, username, reservations, token, reviews} = this.props
          
    let allReservations = reservations.map((reservationPojo) => {
      return <UserReservationContainer
              key ={reservationPojo.id}
              reservation = {reservationPojo}
              token = {token}
            />
    })

    let allReviews = reviews.map((reviewPojo) => {
      return <div><UserReviewContainer
      deleteReviewsFromState = {this.props.deleteReviewsFromState}
      updateReviewFromState = {this.props.updateReviewFromState}
              key ={reviewPojo.id}
              review = {reviewPojo}
            />
            <ReviewsForListings 
            review = {reviewPojo}
            />

            </div>    
                   
    })


 
    return (      
      <div>
        
        <h2>Hi, I'm {username}</h2>
        <strong>Joined in 2020</strong>
        
        <h3 className='about'>About </h3>

        
         <div>
           <p>reviews</p>
         </div>

         {allReviews}

         
         
         
      </div>
    );
  }

}

export default ProfileContainer;