import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


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
            <div className = 'all-reviews-profile' >
                <strong>nickname:  {nickname}</strong>
                <p className = 'profile-content'>{content}</p> 
                <button className='likes-button' onClick={ this.handleOrderClick } >
                    {likes} <ThumbUpIcon />
                </button>
                
                <div className="delButton" onClick={this.handleDelete}>
                    <DeleteForeverIcon />
                </div>
            </div>
        )




        }
    

    
    
}

export default UserReviewContainer