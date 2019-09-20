import React, { Component } from 'react'
import NavLogo from './NavLogo'
import NavItem from './NavItem'
import "./NavigationBar.css"

export class NavigationBar extends Component {

    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <NavLogo image="./images/logo-secondary.png" link="/" />
                    <NavItem name="spencerpauly.com" link="/" />
                </div>
                <div>
                    <div className="navbar-right">
                        <NavItem name="About Me" className="hvr-grow" link="/about" />
                        <NavItem name="My Projects" link="/projects" />
                        <NavItem name="Contact Me" link="/contact" />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default NavigationBar
