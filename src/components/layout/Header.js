import React from 'react';
import "./Header.css"
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'



function Header() {
    return (
        <>
            <header className='header'>
                <div>
                    <img src="./images/avatar-1.jpg" alt="header"/>
                </div>

                <div>
                    <h1>Spencer Pauly</h1>
                    <p>Hello there!</p>
                    <p>
                        I'm a Computer Science B.S. Student at University of Minnesota Duluth. 
                        As a student who loves working on personal programming projects I found the need to have a central repository to host all my projects.
                        This website is the solution. It's built using the React framework on the front end and NodeJS, Nginx, and MongoDB for the backend. Enjoy!
                        
                    </p>
                    <Button variant="main">Contact Me</Button>
                </div>
               
                
                
            </header>
            <div class="socialMediaButtons">
                <span className="fa-layers fa-fw iconWrapper">
                    <FontAwesomeIcon icon={faCircle} color="#212121" />
                    <FontAwesomeIcon icon={faGithub} color="" inverse transform="shrink-8"/>
                </span> 
                <span className="fa-layers fa-fw iconWrapper">
                    <FontAwesomeIcon icon={faCircle} color="#212121" />
                    <FontAwesomeIcon icon={faLinkedinIn} inverse transform="shrink-8"/>
                </span> 
                <span className="fa-layers fa-fw iconWrapper">
                    <FontAwesomeIcon icon={faCircle} color="#212121" />
                    <FontAwesomeIcon icon={faInstagram} inverse transform="shrink-8"/>
                </span> 
                <span className="fa-layers fa-fw iconWrapper">
                    <FontAwesomeIcon icon={faCircle} color="#212121" />
                    <FontAwesomeIcon icon={faSpotify} inverse transform="shrink-8"/>
                </span> 
            </div>
        </>
    )
}

export default Header;