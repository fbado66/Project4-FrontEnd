import React, { Component } from 'react';

class ReservationForm extends Component {

  state = {
    
    listing_id: this.props.listing.id,
    check_in_date: "",
    check_out_date: "",
    guest_count: "",
  }



  // ----- handle Reservation Form  -----------------------

  handleAlert = () => {
    alert('Thank you for reservation')
  }

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

    // console.log("RESERVATION")
    // console.log(localStorage)
    // console.log(this.props)


    return (
      <div className = 'reservationForm'>
        <div className="ui segment">
          <form onSubmit={this.handleReservationForm}>
            <div className="inline fields">
              <h1>{formName}</h1>

              <label className='check-in' htmlFor="check_in">CHECK-IN</label>
                <input type="date" autoComplete="off" 
                        name="check_in_date" 
                        value={check_in_date} 
                        onChange={this.handleChange}
                />

              <label className='check-out' htmlFor="check_out">CHECK-OUT</label>
                <input type="date" autoComplete="off" 
                        name="check_out_date" 
                        value={check_out_date} 
                        onChange={this.handleChange}
                />

              <label className='guest-count' htmlFor="guest_count">GUESTS</label>
                <input type="number" autoComplete="off" 
                        name="guest_count" 
                        value={guest_count} 
                        onChange={this.handleChange}
                />

              <input className='submit' onClick ={this.handleAlert} type="submit" value="Check availabilty"/>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default ReservationForm;






