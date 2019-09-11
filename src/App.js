import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Header from './components/layout/Header';
import Projects from './components/modules/Projects';

class App extends Component {
    state = {
        projects: [
            {
                title: "Scholarship Essay (up here temporarily)",
                desc: "This is my scholarship essay for 2019.",
                image: "./images/scholarship-1.png",
                github: "https://thebomb.com",
                project: "https://docs.google.com/document/d/1DDcnIAiLn1c67Fook3-bZQEQeA9SjHsm2061XhkNl1w/edit",
                status: "Work In Progress",
                featured: true,
            },
            {
                title: "Old Non-React Version of spencerpauly.com",
                desc: "This is the old version of my website. It looks quite a bit more polished than this version except it has a number of flaws that inspired me to use React and redesign the site.",
                image: "./images/oldwebsite-1.png",
                github: "",
                project: "http://spencerpauly.com:3001",
                status: "Completed 7/13/18",
                featured: true,
            },
            {
                title: "Start Of The World - Unity3D Mobile Game",
                desc: "This is my work in progress mobile game being developed in Unity3D. It's going to function as an open-world 2D land-claiming game that overlays over the real-world map using the iPhone's GPS. The whole concept is still early in development but ETA is ~020.",
                image: "./images/sotw-1.png",
                github: "https://github.com/spencerpauly/Start-Of-The-World",
                project: "https://github.com/spencerpauly/Start-Of-The-World",
                status: "Work In Progress",
                featured: false,
            },
            {
                title: "Spotify Statistics Webpage",
                desc: "This is an online tool that utilizes the Spotify Web API to gather personalized data about your music listening trends. My app uses this data to allow you to see your favorite tracks and artists, then download these tracks into a personalized spotify playlist and does this all through a secure backend connection to Spotify's Web API with NodeJS.",
                image: "./images/nn-1.png",
                github: "https://github.com/spencerpauly/Spotify-Statistics-Web-App",
                project: "http://spencerpauly.com:3001/spotify",
                status: "Completed 7/13/18",
                featured: false,
            },

        ]
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then(res => this.setState({projects: res.data}));
    // }

    getFeaturedProjects = () => {
        return this.state.projects.filter(project => project.featured === true);
    }

    getNonFeaturedProjects = () => {
        return this.state.projects.filter(project => project.featured === false);
    }

    render() {
        return (
            <Router>
                <div className="App" >
                    <NavigationBar />
                    <Header/>
                    <Projects projects={this.state.projects}/>
                </div>
            </Router>
        );
    }
} 


export default App;
