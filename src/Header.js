import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom'


function Header(props) {
    console.log(props)

    let handleInput = (evt) => { 
        props.changeBasedOnInput(evt.target.value)
      }

      let handleSubmit = (evt) => {

        evt.preventDefault()

        this.props.history.push("/search")
        
        // props.history.push(`/search/${props.listing.id}`)
      }

    return (
        <div className = 'header-holder'>
            <NavLink to="/">
                <div className = 'logo-contatiner'>
                    <img className = 'logo'
                        src = "https://ih1.redbubble.net/image.443602210.1540/flat,750x1000,075,f.u1.jpg"
                        alt = ''/>
                    <h5 className = 'duckbnb'>DuckBnB</h5>
                </div>
            </NavLink>

            <form className='headerSearch' 
            onSubmit = {handleSubmit} >
                <input 
                    type='text'
                    placeholder={"Feature currently under construction"}
                    value={props.searchListing}
                    onChange={handleInput } />
                    
                <SearchIcon />
            </form>

            <div className = 'userHolder'>
                <NavLink to="/login">
                    <p> Log in</p>
                </NavLink>

                <NavLink to="/register">
                    <p> Register</p>
                </NavLink>

                <LanguageIcon />

                <NavLink to="/profile">
                    <AccountCircleIcon />
                </NavLink>

            </div>
        </div>
    )
}

export default Header

