import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import UserReservationContainer from './UserReservationContainer'
class ProfileContainer extends Component {

  

  render() {
    console.log('I AM FROM PROFILE ')
    console.log(this.props)
    let {id, username, reservations, token} = this.props
          
    let allReservations = reservations.map((reservationPojo) => {
      return <UserReservationContainer
              key ={reservationPojo.id}
              reservation = {reservationPojo}
              token = {token}
            />
    })

    console.log('PROFILE COMPONENT')
    console.log(this.props)
    return (      
      <div>
        <p>Hello world from the profile container</p>
        <h2>{username}&apos;s Profile</h2>
         {allReservations}

         
         
         
      </div>
    );
  }

}

export default ProfileContainer;