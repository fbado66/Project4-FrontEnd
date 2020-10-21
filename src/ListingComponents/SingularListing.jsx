import React, {Component } from 'react'
// import { withRouter} from 'react-router-dom'
import ReservationForm from '../ReservationForm'


// export default class extends React.Component {

//     state = {
//         catch_phrase: "",
//         title: "",
//         description: "",
//         details: "",
//         host_info: "",
//         image_1_url: "",
//         image_2_url: "",
//         image_3_url: "",
//         image_4_url: "",
//         image_5_url: "",
//         reviews: [],
//         price: '',
//         id: ''
//     }

//     componentDidMount(){
//         fetch(`http://localhost:3000/listings/${this.props.listingUrl}`)
//           .then(res => res.json())
//           .then((listing) => {
//               this.setState ( {
//                     catch_phrase: listing.catch_phrase,
//                     title: listing.title,
//                     description: listing.description,
//                     details:listing.details,
//                     host_info: listing.host_info,
//                     image_1_url: listing.image_1_url,
//                     image_2_url: listing.image_2_url,
//                     image_3_url: listing.image_3_url,
//                     image_4_url: listing.image_4_url,
//                     image_5_url: listing.image_5_url,
//                     reviews: listing.reviews,
//                     price: listing.price,
//                     id: listing.id
//               })
            
//           })
//       }
    

//     render() {
//         let {catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, reviews, price} = this.state


//         console.log(this.props.listingPojo)
//     return (
//         <div>
//            <h1>{catch_phrase}</h1> 
//            <h2>{title}</h2>
//            <h6>{description}</h6>
//            <p>{details}</p>
//            <p>{host_info}</p>
//            <img src = {image_1_url} />
//            <img src = {image_2_url} />
//            <img src = {image_3_url} />
//            <img src = {image_4_url} />
//            <img src = {image_5_url} />
//            <p>$ {price}.00 / night</p>

//         <ReservationForm listing_id ={this.state.id} />
//         </div>
//     )
//     }
// }
 
const SingularListing = (props) => {

    let {catch_phrase, title, description, details, host_info, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, reviews, price} = props.listingPojo

    return (
        <div>
           <h1>{catch_phrase}</h1> 
            <h2>{title}</h2>
            <h6>{description}</h6>
            <p>{details}</p>
            <p>{host_info}</p>
            <img src = {image_1_url} />
            <img src = {image_2_url} />
            <img src = {image_3_url} />
            <img src = {image_4_url} />
            <img src = {image_5_url} />
            <p>$ {price}.00 / night</p>

        <ReservationForm listing = {props.listingPojo}/>
         </div>
    )
}

export default SingularListing