import React, { Component } from 'react';
import ReviewOnListing from "./ReviewOnListing"

class ReviewForm extends Component {

  state = {
    listing_id: this.props.listing.id,
    nickname: "",
    content: "",
    likes: 1
  }

  // ----- handle Review Form  -----------------------

 handleReviewForm = (evt) => {
   evt.preventDefault()
  
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
      likes: this.state.likes
    })
  })
    .then(res => res.json())
    .then((response) => {
      this.props.addReviewsToState(response)
      // if(response.error){
      //   console.error(response.error)
      // } else {
      //   this.props.addReviewsToState(response)

      //   // this.setState({
      //   //   reviews: response,
      //   //   user_id: "",
      //   //   listing_id: "",
      //   //   nickname: "",
      //   //   content: ""
      //   // })
        
      // }
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
      <div className = 'review-form'>
      <form onSubmit={this.handleReviewForm}>
        <h1>{formName}</h1>
        <h4>Create a Review</h4>

        <label htmlFor="nickname">nickname:</label>
        <input type="text" autoComplete="off" 
          name="nickname" 
          value={this.props.nickname} 
          onChange={this.handleChange}
          />

        <label htmlFor="content">content:</label>
        <input type="text" autoComplete="off" 
          name="content" 
          value={this.props.content} 
          onChange={this.handleChange}
          />

        <label className = 'likes-form' htmlFor="likes">likes:</label>
        <input type="number" autoComplete="off" 
          name="likes" 
          value={this.props.likes} 
          onChange={this.handleChange}
          />
    
        <input type="submit" value="Submit"/>
      </form>

      <ReviewOnListing 
      reviews = {this.addReviewsToState} 
      reviewUpdate = {this.updateReviewFromState}
      />
      </div>
    );
  }

}

export default ReviewForm;






