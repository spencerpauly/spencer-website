import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
import "./ProjectItem.css"

export class ProjectItem extends Component {
    
    githubButton = () => {
        return (this.props.project.github !== "") ? 
            <Button link={this.props.project.github}>Github</Button> : <span></span>
    }

    projectButton = () => {
        return (this.props.project.project !== "") ?
            <Button link={this.props.project.project}>Project</Button> : <span></span>
    }

    render() {
        return (
            <div className="projectItem">
                <div className="">
                    <h3>{this.props.project.title}</h3>
                    <p>{this.props.project.desc}</p>
                    
                </div>
                
                {this.projectButton()}
                {this.githubButton()}
                    
                    
            </div>
        )
    }
}

//PropTypes
ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
