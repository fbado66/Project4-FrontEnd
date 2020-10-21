import React, { Component } from 'react';
import ReservationForm from './ReservationForm'

class ProfileContainer extends Component {

  

  render() {
    let {username, reservations} = this.props
    let user_id = this.props.id 
      
    
    let singleReservation = reservations.map((reservationPojo) => {
      console.log(reservationPojo)

    })

    
    // let allSnacks = snacks.map(snackObj => {
    //   return <Snack key={snackObj.id} snack={snackObj} />
    // })
    console.log(this.props)
    return (
      

      <div>
        
          <p>Hello world from the profile container</p>
         <h2>{username}&apos;s Profile</h2>
         <p>Reservation Container will go here </p>

        


      </div>
    );
  }

}

export default ProfileContainer;