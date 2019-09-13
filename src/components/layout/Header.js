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
                <p>I'm a Computer Science B.S. Student at University of Minnesota Duluth. I'm currently looking for an internship for the summer of 2020 in the field of software engineering.</p>
                <p>If you are a company looking to hire or just a fellow programmer who would like to discuss stuff. Feel free to...</p>
                <Button variant="danger">Contact Me</Button>
            </div>
            
            
        </header>
    )
}

export default Header;