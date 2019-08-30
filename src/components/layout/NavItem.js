import React, { Component } from 'react'
import "./NavItem.css"
import { Link } from 'react-router-dom';


export class NavItem extends Component {
    render() {
        return (
            <Link to={this.props.link} className="navItem">{this.props.name}</Link>
        )
    }
}

export default NavItem
