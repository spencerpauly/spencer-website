import React from 'react';
import "./Header.css"
import Button from "react-bootstrap/Button";

function Header() {
    return (
        <header className='header'>
            <div>
                <img src="./images/avatar-1.jpg" alt="header"/>
            </div>

            <div>
                <h1>Spencer Pauly</h1>
                <p>Hello there!</p>
                <p>I'm a Computer Science B.S. Student at University of Minnesota Duluth. I'm currently looking for an internship for the summer of 2020 in the field of software engineering. My goals are to develop awesome software in a modern environment.</p>
                <Button variant="main">Contact Me</Button>
            </div>
            
            
        </header>
    )
}

export default Header;