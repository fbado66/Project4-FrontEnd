import React, { Component } from 'react';

class RegisterForm extends Component {

  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    location: ""
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
    let {username, password, first_name, last_name, email, phone, location} = this.state

    return (
      <div className='registerForm'>
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>

        <label htmlFor="first_name">First Name:</label>
        <input type="text" autoComplete="off" 
          name="first_name" 
          value={first_name} 
          onChange={this.handleChange}
          />

        <label htmlFor="last_name">Last Name:</label>
        <input type="text" autoComplete="off" 
          name="last_name" 
          value={last_name} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">Email:</label>
        <input type="text" autoComplete="off" 
          name="email" 
          value={email} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">Username:</label>
        <input type="text" autoComplete="off" 
          name="username" 
          value={username} 
          onChange={this.handleChange}
          />

        <label htmlFor="phone">Phone:</label>
        <input type="number" autoComplete="off" 
          name="phone" 
          value={phone} 
          onChange={this.handleChange}
          />

        <label htmlFor="location">Location:</label>
        <input type="text" autoComplete="off" 
          name="location" 
          value={location} 
          onChange={this.handleChange}
          />

        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" 
          name="password" 
          value={password} 
          onChange={this.handleChange}
        />
        <input className= 'registerFormSubmit' type="submit" value="Join the fun"/>
      </form>
      </div>
    );
  }

}

export default RegisterForm;