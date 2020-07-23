import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Header from './components/layout/Header';
import About from './components/modules/About';
import Projects from './components/modules/Projects';
import ContactMe from './components/modules/ContactMe';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	state = {
		projects: [
			{
				id: 1222,
				title: 'Skiwise - iOS & Android App',
				desc: `
          Skiwise is an iOS and Android app for Cross Country Skiers to view trail conditions. As a skier myself, I've had numerous situations where I've driven all the way
          out to a ski trail only to realize it hasn't been groomed after the big storm 2 days ago. Bregrudingly I finish my workout on the thick powder, but each time
          this happens I wish for a solution. That's one of the many problems that Skiwise is hoping to solve. Skiwise a mobile app for skiers to connect with other 
          skiers, trail groomers, and live weather reports to receive realtime trail conditions straight to your mobile device. Skiwise is built as a hybrid mobile app using 
          Ionic 5 and React. It's backend is comprised of an automated CI/CD pipeline to deploy google cloud functions,
          a powerful Hasura GraphQL API, and a Postgres database. Authentication is handled through Firebase Auth and file storage 
          is powered by google's cloud storage.
        `,
				image: 'projects/skiwise_xxsda.png',
				github: '',
				project: 'https://skiwise-app.com',
				status: 'Ongoing',
				frameworks: [
					'React',
					'Ionic 5',
					'GraphQL',
					'React-Hook-Form',
					'Firebase',
					'Firestore',
					'Google Cloud Functions',
					'Emotion',
					'Hasura',
					'PostgreSQL',
					'Github Actions',
					'Capacitor',
					'Apollo Client',
				],
				programmingLanguages: ['Typescript', 'HTML', 'CSS'],
				featured: true,
				show: true,
			},
			{
				id: 5,
				title: 'Minimal Youtube Search App',
				desc:
					"This search app is built in React and offers a minimal search browser for youtube. It's built with the goal of allowing me to use youtube for research and learning while not getting distracted by recommended videos.",
				image: 'projects/youtubeicon_nvkes9.png',
				github: 'https://github.com/spencerpauly/youtube-minimal-search-app',
				project: 'https://youtube.spencerpauly.com',
				status: 'Completed 10/29/2019',
				frameworks: ['React', 'Youtube API', 'Git', 'Cloudinary CDN'],
				programmingLanguages: ['HTML', 'CSS', 'JavaScript'],
				featured: false,
				show: true,
			},
			{
				id: 0,
				title: 'SpencerPauly.com Portfolio Website in React',
				desc:
					"This website is my online portfolio built using the React framework. The initial prototype for the site was built in 24 hours with no prior experience with React at all. From that point on I've been adding features and keeping continous progress updates through git. This project uses Nginx as a backend reverse proxy, MongoDB as a dynamic database for project data, and Flexbox web design to provide a beautiful responsive front-end interface. Future plans include a refactoring, as-well as a UI/UX overhaul and cleaner backend design with Docker containers.",
				image: 'projects/spencerpauly-1_gtrvdg.png',
				github: 'https://github.com/spencerpauly/spencerpauly.com-main-website',
				project: '',
				status: 'Completed 9/27/2019',
				frameworks: [
					'React',
					'NodeJS',
					'Nginx',
					'MongoDB',
					'Git',
					'React-Bootstrap',
					'Cloudinary CDN',
				],
				programmingLanguages: ['HTML', 'CSS', 'JavaScript'],
				featured: true,
				show: true,
			},
			{
				id: 1,
				title: 'Spotify Statistics Webpage',
				desc:
					"This is an online tool that utilizes the Spotify Web API to gather personalized data about your music listening trends. My app uses this data to allow you to view your favorite tracks and artists in an online web app. It also compiles you  personalized spotify playlist of your favorite tracks. This is all done securily using NodeJS as a secure backend to handle the connection between Spotify's Web API and the end user.",
				image: 'projects/spotify-7_phsova.png',
				github: 'https://github.com/spencerpauly/Spotify-Statistics-Web-App',
				project: 'https://spotify.spencerpauly.com',
				status: 'Completed 12/20/2018',
				frameworks: ['JQuery', 'Bootstrap', 'NodeJS', 'Web API', 'Git'],
				programmingLanguages: ['HTML', 'CSS', 'JavaScript'],
				featured: true,
				show: true,
			},
			{
				id: 2,
				title: 'Start Of The World Mobile Game',
				desc:
					"Start of The World is as an open-world land-claiming game that overlays over the real-world map. It uses the phone's GPS to position a user properly in game world and is designed to work on both IOS and Android. In the game you manage a cohort of soldiers as you move as a pack to conquest the next city. This project has taught me a LOT about architecture and is one of my first larger-sized projects.",
				image: 'projects/sotw-1_hvayqo.png',
				github: 'https://github.com/spencerpauly/Start-Of-The-World',
				project: '',
				status: 'Paused',
				frameworks: ['Unity', 'Design Patterns', 'Component-Based Architecture', 'Level Design'],
				programmingLanguages: ['C#'],
				featured: false,
				show: true,
			},
			{
				id: 3,
				title: 'Proof-Of-Concept Neural Network for String Encryption',
				desc:
					'A C++ Neural Network made from scratch to encrypt and decrypt strings. This project features a custom-made matrix multiplication library and a custom .TSV file reader to automatically pass data as inputs to the neural network. This is an old project from freshman year of college, so I decided to build all the components of it myself instead of using frameworks and libraries.',
				image: 'projects/nn-1_ok9o0j.png',
				github:
					'https://github.com/spencerpauly/Neural-Network-for-String-Encryption-and-Decryption',
				project: '',
				status: 'Completed 6/8/2018',
				frameworks: [],
				programmingLanguages: ['C++'],
				featured: false,
				show: true,
			},
			{
				id: 4,
				title: 'Census Data Android App Group Project',
				desc:
					"This project was completed as a group final project for Software Engineering. It's a mobile app that allows you to view census data from a variety of years from an android phone. The data is stored in a database with over 100,000 names and we created endpoints to efficiently search and display this data to users.",
				image: '',
				github: 'https://github.com/spencerpauly/Software-Engineering-Census-Android-App',
				project: '',
				status: 'Completed 5/13/2018',
				frameworks: [
					'Android Studio',
					'Gradle',
					'NodeJS',
					'MongoDB',
					'JSON',
					'Team Organization & Management',
				],
				programmingLanguages: ['Java'],
				featured: false,
				show: true,
			},
		], //Projects

		skills: [
			{
				name: 'Agile Development',
				type: 'development',
			},
			{
				name: 'Project Management',
				type: 'interpersonal',
			},
			{
				name: 'Problem Analysis',
				type: 'interpersonal',
			},
			{
				name: 'Simple MVC Architecture',
				type: 'development',
			},
			{
				name: 'Goal Setting',
				type: 'interpersonal',
			},
			{
				name: 'Self-Motivated',
				type: 'interpersonal',
			},
			{
				name: 'Teamwork',
				type: 'interpersonal',
			},
			{
				name: 'Design Patterns',
				type: 'development',
			},
			{
				name: 'Python',
				type: 'language',
			},
			{
				name: 'C++',
				type: 'language',
			},
			{
				name: 'Bootstrap',
				type: 'framework',
			},
			{
				name: 'MongoDB',
				type: 'framework',
			},
			{
				name: 'React',
				type: 'framework',
			},
			{
				name: 'HTML/CSS',
				type: 'language',
			},
			{
				name: 'Java',
				type: 'language',
			},
			{
				name: 'C#',
				type: 'language',
			},
			{
				name: 'Unity3D',
				type: 'framework',
			},
			{
				name: 'Android Development',
				type: 'framework',
			},
			{
				name: 'Gradle',
				type: 'framework',
			},
			{
				name: 'JavaScript',
				type: 'language',
			},
			{
				name: 'Git',
				type: 'framework',
			},
			{
				name: 'SVN',
				type: 'framework',
			},
			{
				name: 'Photoshop',
				type: 'framework',
			},

			{
				name: 'JQuery',
				type: 'framework',
			},
			{
				name: 'NodeJS',
				type: 'framework',
			},
			{
				name: '.NET Framework',
				type: 'framework',
			},
			{
				name: 'JSON',
				type: 'framework',
			},
			{
				name: 'Nginx',
				type: 'framework',
			},
		], //Skills
	}; //this.State

	getFeaturedProjects = () => {
		return this.state.projects.filter((project) => project.featured === true);
	};

	getNonFeaturedProjects = () => {
		return this.state.projects.filter((project) => project.featured === false);
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<NavigationBar />
					<Header />
					<section className='content'>
						<About skills={this.state.skills} />
						<Projects projects={this.state.projects} />
					</section>
					<ContactMe />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
