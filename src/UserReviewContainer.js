import React from 'react';


class UserReviewContainer extends React.Component {

    handleOrderClick = (evt) => {
        fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json",
                "authorization": this.props.token

            },
            body: JSON.stringify({
                likes: this.props.review.likes + 1
            })
        })
            .then(res => res.json())
            .then(updatedReview => {
                this.props.updateReviewFromState(updatedReview)
            })
    }

    handleDelete = (evt) => {

        fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteReviewsFromState(this.props.review.id)
            })

    }
    

    render () {
        let {nickname, content, likes} = this.props.review

        return (
            <div>
                <p>nickname: {nickname}</p>
                <p>Content: {content}</p> 
                <button onClick={ this.handleOrderClick } >
                    Likes: {likes}
                </button>
                
                <button className="delButton" onClick={this.handleDelete}>
                    x
                </button>
            </div>
        )




        }
    

    
    
}

export default UserReviewContainer