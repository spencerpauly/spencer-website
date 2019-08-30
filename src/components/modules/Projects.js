import React, { Component} from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import "./Projects.css"


class Projects extends Component {

    getProjects = () => {
        return this.props.projects.map((project) => (
            <ProjectItem key={project.id} project={project}/>
        ))
    }

    render() {
        return (
            <div className="projects">
                {this.getProjects()}
            </div>
            
        )
            
        
    }
}

//PropTypes
Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;