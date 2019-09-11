import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import "./Project.css"

export class Project extends Component {
    
    githubButton = () => {
        return (this.props.project.github !== "") ?
            <Button variant="contained" color="tertiary">Github</Button> : <span></span>
    }

    projectButton = () => {
        return (this.props.project.project !== "") ?
            <Button variant="contained" color="primary">Project</Button> : <span></span>
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
Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project
