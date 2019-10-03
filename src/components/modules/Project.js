import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "./Project.css"
import projectImageLoader from 'components/model/ProjectImages';

export class Project extends Component {
    
    state = {
        projectImages: []
    }

    componentDidMount() {
        const projectImages = projectImageLoader();
        this.setState({projectImages});
      }

    projectButton = () => {
        return (this.props.project.project !== "") ?
            <Button href={this.props.project.project} target="_blank" variant="project" className="projectButton">View Project</Button> : <span></span>
    }

    githubButton = () => {
        return (this.props.project.github !== "") ?
            <Button href={this.props.project.github} target="_blank" variant="github" className="projectButton">Github</Button> : <span></span>
    }

    facts = () => {
        if (this.props.project.facts) {
            return this.props.project.facts.map((fact) => (
            <li>{fact}</li>
            ))
        }
    }

    frameworkBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="primaryItem" className="projectBadge">{badge}</Badge>
            ))    
        }
    }

    programmingLanguageBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="secondaryItem" className="projectBadge">{badge}</Badge>
            ))    
        }
    }

    featuredProjectItem = () => {
        var image = function() {
            this.state.projectImages.forEach((projectImage) => {
                if (projectImage.id === this.props.project.id) {
                    return projectImage.image;
                }
            });
        };


        // {
        //     if(jsonObj[i].name == "KC Content Kind ID")
        //         return jsobObj[i].id;
        // }

        return (
            <div className="featuredProject">
                <img src={image} alt="featured" />
                <div className="featuredProjectDescription">
                    <h3>{this.props.project.title}</h3>
                    <p>{this.props.project.desc}</p>
                    <div className="projectBadges">
                        {this.frameworkBadges(this.props.project.frameworks)}
                        {this.programmingLanguageBadges(this.props.project.programmingLanguages)}
                    </div>
                    <p>
                        {this.projectButton()}
                        {this.githubButton()}
                    </p>
                </div>
            </div>
        )
    }

    projectItem = () => {
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
                            {this.frameworkBadges(this.props.project.frameworks)}
                            {this.programmingLanguageBadges(this.props.project.programmingLanguages)}
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

    renderProjectData = () => {
        if(this.props.project.featured === true) {
            return this.featuredProjectItem();
        } else {
            return this.projectItem();
        }
    }

    render() {
        return ( 
            <>
                {this.renderProjectData()}
            </>
        )
    }
}

//PropTypes
Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project
