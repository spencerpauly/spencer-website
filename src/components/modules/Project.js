import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './Project.css';
import { Image } from 'cloudinary-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
	faAppStore,
	faAppStoreIos,
	faApple,
	faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';

export class Project extends Component {
	projectButton = () => {
		return this.props.project.project !== '' ? (
			<Button
				href={this.props.project.project}
				target='_blank'
				variant='project'
				className='projectButton'
			>
				View Project Live
				<FontAwesomeIcon className='liveIcon' icon={faCircle} color='red' />
			</Button>
		) : (
			<span></span>
		);
	};

	githubButton = () => {
		return this.props.project.github !== '' ? (
			<Button
				href={this.props.project.github}
				target='_blank'
				variant='github'
				className='projectButton'
			>
				Github
			</Button>
		) : (
			<span></span>
		);
	};

	facts = () => {
		if (this.props.project.facts) {
			return this.props.project.facts.map((fact) => <li>{fact}</li>);
		}
	};

	frameworkBadges = (badges) => {
		if (badges) {
			return badges.map((badge) => (
				<Badge key={badge} variant='primaryItem' className='projectBadge'>
					{badge}
				</Badge>
			));
		}
	};

	programmingLanguageBadges = (badges) => {
		if (badges) {
			return badges.map((badge) => (
				<Badge key={badge} variant='secondaryItem' className='projectBadge'>
					{badge}
				</Badge>
			));
		}
	};

	featuredProjectItem = () => {
		return (
			<div className='featuredProject'>
				<div className='titlesection'>
					<div className='left'>
						<h3>{this.props.project.title}</h3>
					</div>
					<div className='right'>{this.props.project.sideTitle}</div>
				</div>
				<Image
					className='projectImage'
					cloudName='spencerpauly'
					publicId={this.props.project.image}
					width='1200'
					crop='scale'
				/>
				<div className='featuredProjectDescription'>
					<div className='projectBadges'>
						{this.programmingLanguageBadges(this.props.project.programmingLanguages)}

						{this.frameworkBadges(this.props.project.frameworks)}
					</div>
					<p>{this.props.project.desc}</p>

					<p>
						<Button
							href='https://skiwise-app.com'
							target='_blank'
							variant='github'
							className='projectButton featurenew'
						>
							<FontAwesomeIcon icon={faLink} color='white' /> View Live on Web
						</Button>
						<Button
							href='https://apps.apple.com/us/app/skiwise-for-nordic-skiers/id1491659436'
							target='_blank'
							variant='github'
							className='projectButton featurenew'
						>
							<FontAwesomeIcon icon={faApple} color='white' /> App Store
						</Button>
						<Button
							href='https://play.google.com/store/apps/details?id=com.skiwise.app'
							target='_blank'
							variant='github'
							className='projectButton featurenew'
						>
							<FontAwesomeIcon icon={faGooglePlay} color='white' /> Google Play Store
						</Button>
					</p>
					<p>
						<span className='asdasdasd'>(NEW) </span>
						<a
							href='https://medium.com/@spencerpauly/the-9-month-solo-development-journey-of-skiwise-282c74cd5c3a'
							className='sadasda'
						>
							View Article Reflecting on the 9 Month Development Process of Skiwise{' '}
							<FontAwesomeIcon icon={faExternalLinkAlt} color='#007bff' />
						</a>
					</p>
				</div>
			</div>
		);
	};

	projectItem = () => {
		return (
			<div className='projectItem'>
				<div className='projectInfo'>
					<h3>{this.props.project.title}</h3>
					<p>{this.props.project.desc}</p>
					<ul>{this.facts()}</ul>
					<div className='interactionButtons'>
						<div className='projectBadges'>
							{this.programmingLanguageBadges(this.props.project.programmingLanguages)}
							{this.frameworkBadges(this.props.project.frameworks)}{' '}
						</div>
						<div className='projectButtons'>
							{this.projectButton()}
							{this.githubButton()}
						</div>
					</div>
				</div>
			</div>
		);
	};

	renderProjectData = () => {
		if (this.props.project.featured === true) {
			return this.featuredProjectItem();
		} else {
			return this.projectItem();
		}
	};

	render() {
		return <>{this.renderProjectData()}</>;
	}
}

//PropTypes
Project.propTypes = {
	project: PropTypes.object.isRequired,
};

export default Project;
