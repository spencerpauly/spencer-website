import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import "./FeaturedProject.css"

export class FeaturedProject extends Component {
    githubButton = () => {
        return (this.props.project.github !== "") ?
            <Button variant="tertiary">View Code On Github</Button> : <span></span>
    }

    projectButton = () => {
        return (this.props.project.project !== "") ?
            <Button variant="secondary">View Project</Button> : <span></span>
    }

    render() {
        return (
            <div className="featuredProject">
                <img src={this.props.project.image} alt="featured" />
                <div className="featuredProjectDescription">
                    
                    <h3>{this.props.project.title}</h3>
                    <p>{this.props.project.desc}</p>
                    <p>{this.projectButton()}
                        {this.githubButton()}</p>
                </div>
                
            </div>
        )
    }
}

//PropTypes
FeaturedProject.propTypes = {
    project: PropTypes.object.isRequired
}

export default FeaturedProject