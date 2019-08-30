import React, { Component } from 'react'
import "./Container.css"


export class container extends Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default container
