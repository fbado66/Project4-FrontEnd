import React, { Component } from 'react';

class ReviewForm extends Component {

  state = {
    listing_id: this.props.listing.id,
    nickname: "",
    content: "",
  }



  // ----- handle Review Form  -----------------------

 handleReviewForm = (evt) => {
   evt.preventDefault()


  console.log("Review form has been submitted")

  fetch("http://localhost:3000/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "authorization": this.props.token
    },
    body: JSON.stringify({
      listing_id: this.state.listing_id,
      nickname: this.state.nickname, 
      content: this.state.content,
    })
  })
    .then(res => res.json())
    .then((response) => {
      if(response.error){
        console.error(response.error)
      } else {

        this.setState({
          reviews: response,
          user_id: "",
          listing_id: "",
          nickname: "",
          content: ""
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
    let { nickname, content} = this.state

    console.log("REVIEW")
    console.log(localStorage)
    console.log(this.props)
    return (
      <form onSubmit={this.handleReviewForm}>
        <h1>{formName}</h1>

        <label htmlFor="email">nickname:</label>
        <input type="text" autoComplete="off" 
          name="nickname" 
          value={nickname} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">content:</label>
        <input type="text" autoComplete="off" 
          name="content" 
          value={content} 
          onChange={this.handleChange}
          />
    
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default ReviewForm;






