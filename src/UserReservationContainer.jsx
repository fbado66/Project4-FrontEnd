import React from 'react';


const UserReservationContainer = (props) => {
    
    let {check_in_date, check_out_date, guest_count} = props.reservation
    
    return (
        <div className = 'all-reservation-profile'>
            <p >Check in: {check_in_date}</p>
            <p >Check Out: {check_out_date}</p>
            <strong>Guest Count: {guest_count}</strong>
        </div>
    )
}

export default UserReservationContainer