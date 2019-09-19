import React, { Component} from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import "./Projects.css"


class Projects extends Component {

    getFeaturedProjects = () => {
        return this.props.projects.filter(project => project.featured === true).map((project) => (
            <Project key={project.id} project={project}/>
        ))
    }

    getNonFeaturedProjects = () => {
        return this.props.projects.filter(project => project.featured === false).map((project) => (
            <Project key={project.id} project={project}/>
        ))
    }

    render() {
        return (
            <div className="projectSection">
                <h2 >My Projects</h2>
                <div className="projectItems">
                    {this.getFeaturedProjects()}
                    {this.getNonFeaturedProjects()}
                </div>
            </div>
        )
    }
}

//PropTypes
Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;