import React from 'react';
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <img src="./images/avatar-1.jpg" alt="header"/>
            <h1>Spencer Pauly</h1>
            <p>Computer Science Student</p>
            <p>University of Minnesota Duluth</p>
        </header>
    )
}

export default Header;