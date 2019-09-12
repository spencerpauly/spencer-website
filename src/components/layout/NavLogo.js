import React, { Component } from 'react'
import "./NavLogo.css"


export class NavLogo extends Component {
    render() {
        return (
            <img className="logo" src={this.props.image} alt="nav logo" />
        )
    }
}

export default NavLogo
