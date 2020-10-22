import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom'


function Header() {
    return (
        <div className = 'header-holder'>
            <NavLink to="/">
                <img className = 'logo'
                src = "https://www.thoughtfulcode.com/wp-content/uploads/2019/01/rubber-duck-debugging-and-psychology-sunglassed-rubber-duck-1272x848.jpg"
                alt = ''/>
            </NavLink>

            <div className='headerSearch'>
                <input type='text' ></input>
                <SearchIcon />
            </div>

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

