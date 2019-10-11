import React from 'react';
import "./Header.css"
import Button from "react-bootstrap/Button";
import {Image} from 'cloudinary-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <section id="header" className="header">
            <div className="headerMainSection">
                <div>
                    <Image className="headerImg" cloudName="spencerpauly" publicId="assets/avatar-1_lwtpeq.jpg" width="500" crop="scale"/>
                </div>
                <div>
                    <h1>Spencer Pauly</h1>
                    <p>Hello there!</p>
                    {/* <p>
                        I'm a Computer Science Undergraduate Student at University of Minnesota Duluth. 
                        As someone who loves working on personal programming projects, I found the need to have a central repository to host all my projects.
                        This website is the solution. If you like what you see or have any questions, feel free to contact me. Thank you! 
                    </p> */}
                    <p>
                        I'm a Computer Science Undergraduate Student at University of Minnesota Duluth. 
                        I have experience building many small and medium-scale applications both by myself and as a part of a development team.
                        This website is a showcase of my most recent work and provides some background on me as-well. Enjoy!
                    </p>
                    <Button href="#contact" variant="main">Contact Me</Button>
                </div>
            </div>
            <div className="socialMediaButtons">
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
        </section>
    )
}

export default Header;