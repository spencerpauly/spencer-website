import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./NavigationBar.css"
import {Image} from 'cloudinary-react';

export class NavigationBar extends Component {

    render() {
        return (
            <Navbar className="navbar" collapseOnSelect expand="lg" bg="black" variant="dark">
                <Navbar.Brand href="/">
                    <Image className="navbarLogo d-inline-block align-top" cloudName="spencerpauly" publicId="projects/logo-secondary_mbjinr.png" width="100" crop="scale"/>
                    {' '}
                </Navbar.Brand>                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#about"><span>About Me</span></Nav.Link>
                        <Nav.Link href="#projects"><span>My Projects</span></Nav.Link>
                        <Nav.Link href="#contact"><span>Contact Me</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <div className="navbar">
            //     <div className="navbar-left">
            //         <NavLogo image="./images/logo-secondary.png" link="/" />
            //         <NavItem name="spencerpauly.com" link="/" />
            //     </div>
            //     <div>
            //         <div className="navbar-right">
            //             <NavItem name="About Me" className="navItem" href="#about" />
            //             <NavItem name="My Projects" className="navItem" link="#projects" />
            //             <NavItem name="Contact Me" className="navItem" link="#contact" />
            //         </div>
            //     </div>
                
            // </div>
        )
    }
}

export default NavigationBar
