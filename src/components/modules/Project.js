import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import "./Project.css"

export class Project extends Component {
    
    githubButton = () => {
        return (this.props.project.github !== "") ?
            <Button variant="primary" className="projectButton">Github</Button> : <span></span>
    }

    projectButton = () => {
        return (this.props.project.project !== "") ?
            <Button variant="primary" className="projectButton">View Project</Button> : <span></span>
    }

    facts = () => {
        if (this.props.project.facts) {
            return this.props.project.facts.map((fact) => (
            <li>{fact}</li>
            ))
        }
    }

    badges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="primary" className="projectBadge">{badge}</Badge>
            ))    
        }
        
    }

    render() {
        return (
            <div className="projectItem">
                <div className="projectInfo">
                    <h3>{this.props.project.title}</h3>
                    <p>{this.props.project.desc}</p>
                    <ul>
                        {this.facts()}
                    </ul>
                    <div className="interactionButtons">
                        <div className="projectBadges">
                            {this.badges(this.props.project.frameworks)}
                            {this.badges(this.props.project.programmingLanguages)}
                        </div>
                        <div className="projectButtons">
                            {this.projectButton()}
                            {this.githubButton()}
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }
}

//PropTypes
Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project
