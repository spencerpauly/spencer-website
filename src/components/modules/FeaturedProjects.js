import React, { Component } from 'react';
import FeaturedProject from './FeaturedProject';
import PropTypes from 'prop-types';
import "./FeaturedProjects.css"


class FeaturedProjects extends Component {
    getProjects = () => {
        return this.props.projects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
        ))
    }

    render() {
        return (
            <div className="featuredProjects">
                {this.getProjects()}
            </div>

        )


    }
}

//PropTypes
FeaturedProjects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default FeaturedProjects;