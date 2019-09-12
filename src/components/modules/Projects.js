import React, { Component} from 'react';
import Project from './Project';
import FeaturedProject from './FeaturedProject.js';
import PropTypes from 'prop-types';
import "./Projects.css"


class Projects extends Component {

    getFeaturedProjects = () => {
        return this.props.projects.filter(project => project.featured === true).map((project) => (
            <FeaturedProject key={project.id} project={project}/>
        ))
    }

    getNonFeaturedProjects = () => {
        return this.props.projects.filter(project => project.featured === false).map((project) => (
            <Project key={project.id} project={project}/>
        ))
    }

    render() {
        return (
            <div className="projects">
                {this.getFeaturedProjects()}
                {this.getNonFeaturedProjects()}
            </div>
            
        )
            
        
    }
}

//PropTypes
Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;