import React, { Component } from 'react';

class ReservationForm extends Component {

  state = {
    
    listing_id: this.props.listing.id,
    check_in_date: "",
    check_out_date: "",
    guest_count: "",
  }



  // ----- handle Reservation Form  -----------------------

 handleReservationForm = (evt) => {
   evt.preventDefault()


  console.log("Reservation form has been submitted")

  fetch("http://localhost:3000/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "authorization": this.props.token
    },
    body: JSON.stringify({
      listing_id: this.state.listing_id,
      check_in_date: this.state.check_in_date, 
      check_out_date: this.state.check_out_date,
      guest_count: this.state.guest_count
    })
  })
    .then(res => res.json())
    .then((response) => {
      if(response.error){
        console.error(response.error)
      } else {

        this.setState({
          reservations: response,
          user_id: "",
          listing_id: "",
          check_in_date: "",
          check_out_date: "",
          guest_count: ""

        })
        
      }
    })

}


  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }


  render() {
    let {formName} = this.props
    let { check_in_date, check_out_date, guest_count} = this.state

    console.log("RESERVATION")
    console.log(localStorage)
    console.log(this.props)
    return (
      <form onSubmit={this.handleReservationForm}>
        <h1>{formName}</h1>

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






