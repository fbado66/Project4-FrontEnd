import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewForListings = (props) => {
   
     if (props.review) {
         return <ReviewCard>
             <p>{props.review.content}</p> 
             <p>{props.review.nickname}</p>
             <p>{props.review.likes}</p>

         </ReviewCard>
     } 

    return (
        <div>
            {/* <ReviewCard /> */}
            
        </div>
    )

}

export default ReviewForListings