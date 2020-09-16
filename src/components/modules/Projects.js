import React, { Component } from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import './Projects.css';
import Articles from './Articles';

class Projects extends Component {
	getFeaturedProjects = () => {
		return this.props.projects
			.filter((project) => project.featured === true)
			.map((project) => <Project key={project.id} project={project} />);
	};

	getNonFeaturedProjects = () => {
		return this.props.projects
			.filter((project) => project.featured === false)
			.map((project) => <Project key={project.id} project={project} />);
	};

	render() {
		return (
			<section id='projects' className='projectSection'>
				<h2>My Current Project</h2>
				<div className='projectItems'>
					<div className='featuredProjectItems'>{this.getFeaturedProjects()}</div>
				</div>
				<h2>My Previous Cool Projects</h2>
				<div className='projectItems'>{this.getNonFeaturedProjects()}</div>
				<br />
				<br id='articles' />
				<br />
				<h2>My Blog Posts</h2>
				<Articles />
			</section>
		);
	}
}

//PropTypes
Projects.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default Projects;
