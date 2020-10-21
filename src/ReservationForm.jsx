import React, { Component } from 'react';

class ReservationForm extends Component {

  state = {
    user_id: '', 
    listing_id: '',
    check_in_date: '',
    check_out_date: '',
    guest_count: '',
  }

  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {user_id, listing_id, check_in_date, check_out_date, guest_count} = this.state

    console.log(this.state)

    return (
      <form onSubmit={this.handleSubmit}>
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