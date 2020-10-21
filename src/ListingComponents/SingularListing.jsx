import React from 'react'
import { withRouter} from 'react-router-dom'
import ReservationForm from '../ReservationForm'


const SingularListing = (props) => {
    console.log(props)
    return (
        <div>
            <ReservationForm 
            listing = {props.listing} />
        <p>Hello from Singular Listings</p>
        </div>
    )
}

export default withRouter(SingularListing)