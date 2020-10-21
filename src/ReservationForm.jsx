import React, { Component } from 'react';

class ReservationForm extends Component {

  state = {
    user_id: '', 
    listing_id: '',
    check_in_date: '',
    check_out_date: '',
    guest_count: '',
  }



  // ----- handle Reservation Form  -----------------------

 handleReservationForm = (ReservationPojo) => {
   ReservationPojo.preventDefault()


  console.log("Reservation form has been submitted")

  fetch("http://localhost:3000/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      user_id: ReservationPojo.user_id,
      listing_id: ReservationPojo.listing_id,
      check_in_date: ReservationPojo.check_in_date, 
      check_out_date: ReservationPojo.check_out_date,
      guest_count: ReservationPojo.guest_count
    })
  })
    .then(res => res.json())
    .then((response) => {
      if(response.error){
        console.error(response.error)
      } else {

        this.setState({
          reservations: response.ReservationPojo,
        })
        this.props.history.push("/profile")
      }
    })

}












  
  // handleReservation = (e) => {
  //   e.preventDefault()
  //   this.props.handleReservation(this.state)
  // }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {user_id, listing_id, check_in_date, check_out_date, guest_count} = this.state

    console.log(this.props.listing_id)

    return (
      <form onSubmit={this.handleReservationForm}>
        <h1>{formName}</h1>

        <label htmlFor="first_name">user_id</label>
        <input type="text" autoComplete="off" 
          name="user_id" 
          value={user_id} 
          onChange={this.handleChange}
          />

        <label htmlFor="last_name">listing_id:</label>
        <input type="text" autoComplete="off" 
          name="listing_id" 
          value={listing_id} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">check_in_date:</label>
        <input type="text" autoComplete="off" 
          name="check_in_date" 
          value={check_in_date} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">check_out_date:</label>
        <input type="text" autoComplete="off" 
          name="check_out_date" 
          value={check_out_date} 
          onChange={this.handleChange}
          />

        <label htmlFor="phone">guest_count:</label>
        <input type="text" autoComplete="off" 
          name="guest_count" 
          value={guest_count} 
          onChange={this.handleChange}
          />

    
        
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default ReservationForm;