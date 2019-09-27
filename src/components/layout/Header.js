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
            <header id="header" className='header'>
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
                    <Button href="#contact" variant="main">Contact Me</Button>
                </div>
               
                
                
            </header>
            <div class="socialMediaButtons">
                <a href="https://github.com/spencerpauly/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121" />
                        <FontAwesomeIcon icon={faGithub} className="githubIcon" inverse transform="shrink-8"/>
                    </span> 
                </a>
                <a href="https://www.linkedin.com/in/spencer-pauly-24803278/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121" />
                        <FontAwesomeIcon icon={faLinkedinIn} className="linkedinIcon" inverse transform="shrink-8"/>
                    </span> 
                </a>
                <a href="https://www.instagram.com/spencer_pauly/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121" />
                        <FontAwesomeIcon icon={faInstagram} className="instagramIcon" inverse transform="shrink-8"/>
                    </span>
                </a>
                <a href="https://open.spotify.com/user/1265902628/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121"/>
                        <FontAwesomeIcon icon={faSpotify} className="spotifyIcon" inverse transform="shrink-8"/>
                    </span> 
                </a>
            
            </div>
        </>
    )
}

export default Header;