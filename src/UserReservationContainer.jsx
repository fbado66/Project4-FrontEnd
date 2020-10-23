import React from 'react';

const UserReservationContainer = (props) => {
    console.log('USER RESERVATION ')
    console.log(props.reservation)
    

    let {check_in_date, check_out_date, guest_count} = props.reservation
    
    return (
        <div>
            <p>Check in: {check_in_date}</p>
            <p>Check Out: {check_out_date}</p>
            <p>Guest Count: {guest_count}</p>
        </div>
    )
}

export default UserReservationContainer