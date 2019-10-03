import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
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
                id: 0,
                title: "SpencerPauly.com Website in React",
                desc: "This website is my online portfolio programmed using web technologies and the React framework. It features a fully responsive front-end built for any screen size, and numerous backend features to make website management easier.",
                image: "assets/images/spencerpauly-1.png",
                github: "https://github.com/spencerpauly/spencerpauly.com-main-website",
                project: "http://spencerpauly.com",
                status: "Work In Progress",
                frameworks: [
                    "React",
                    "React-Bootstrap",
                    "NodeJS",
                    "Git",
                    "FontAwesome",
                    
                ],
                programmingLanguages: [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                featured: true,
                show: true,
            },
            {
                id: 1,
                title: "Spotify Statistics Webpage",
                desc: "This is an online tool that utilizes the Spotify Web API to gather personalized data about your music listening trends. My app uses this data to allow you to see your favorite tracks and artists, then download these tracks into a personalized spotify playlist and does this all through a secure backend connection to Spotify's Web API with NodeJS.",
                image: "assets/images/spotify-9.png",
                github: "https://github.com/spencerpauly/Spotify-Statistics-Web-App",
                project: "http://spencerpauly.com",
                status: "Completed 12/20/2018",
                frameworks: [
                    "JQuery",
                    "Bootstrap",
                    "NodeJS",
                    "Git",
                ],
                programmingLanguages: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                ],
                featured: true,
                show: true,
            },
            {
                id: 2,
                title: "Start Of The World Mobile Game",
                desc: "Start of The World is as an open-world 2D land-claiming game that overlays over the real-world map. It uses the phone's GPS to position a user properly in game world and is designed to work on both IOS and Android.",
                image: "assets/images/sotw-1.png",
                github: "https://github.com/spencerpauly/Start-Of-The-World",
                project: "",
                status: "Paused",
                frameworks: [
                    "Unity3D",
                    "Design Patterns",
                    "Component-Based Architecture",
                ],
                programmingLanguages: [
                    "C#",
                ],
                featured: false,
                show: true,
            },
            {
                id: 3,
                title: "POC Neural Network for String Encryption",
                desc: "A C++ Neural Network made from scratch to encrypt and decrypt strings. This project features a custom-made matrix multiplication library and a custom .TSV file reader to automatically pass data as inputs to the neural network.",
                image: "assets/images/nn-1.png",
                github: "https://github.com/spencerpauly/Neural-Network-for-String-Encryption-and-Decryption",
                project: "",
                status: "Completed 6/8/2018",
                frameworks: [
                
                ],
                programmingLanguages: [
                    "C++",
                ],
                featured: false,
                show: true,
            },
            {
                id: 4,
                title: "Census Data Android App Group Project",
                desc: "This project was completed as a group final project for Software Engineering. It's a mobile app that allows you to view census data from a variety of years from an android phone. The data is stored in a database with over 100,000 names and we created endpoints to efficiently search and display this data to users.",
                image: "",
                github: "https://github.com/spencerpauly/Software-Engineering-Census-Android-App",
                project: "",
                status: "Completed 5/13/2018",
                frameworks: [
                    "Android Studio",
                    "Gradle",
                    "NodeJS",
                    "MongoDB",
                    "JSON",
                ],
                programmingLanguages: [
                    "Java",
                ],
                featured: false,
                show: true,
            },

        ],

        // skills: [ 
        //     {
        //         framework: [
        //             "coding",
        //             "secondar",
        //             "test",
        //         ]
        //     },
        //     {
        //         language: [
        //             "coding",
        //             "secondar",
        //             "test",
        //         ]
        //     },
        //     {
        //         interpersonal: [
        //             "coding",
        //             "secondar",
        //             "test",
        //         ]
        //     },
        //     {
        //         development: [
        //             "coding",
        //             "secondar",
        //             "test",
        //         ]
        //     },
        // ],

        skills: [
            {
                name: "Agile Development",
                type: "development",
            },
            {
                name: "Project Management",
                type: "interpersonal",
            },
            {
                name: "Problem Analysis",
                type: "interpersonal",
            },





            {
                name: "Simple MVC Architecture",
                type: "development",
            },
            {
                name: "Goal Setting",
                type: "interpersonal",
            },
            {
                name: "Self-Motivated",
                type: "interpersonal",
            },
            {
                name: "Teamwork",
                type: "interpersonal",
            },

            {
                name: "Design Patterns",
                type: "development",
            },




            {
                name: "Python",
                type: "language",
            },
            {
                name: "C++",
                type: "language",
            },
            {
                name: "Bootstrap",
                type: "framework",
            },
            {
                name: "MongoDB",
                type: "framework",
            },
            {
                name: "React",
                type: "framework",
            },
            {
                name: "HTML/CSS",
                type: "language",
            },
            {
                name: "Java",
                type: "language",
            },
            {
                name: "C#",
                type: "language",
            },

            {
                name: "Unity3D",
                type: "framework",
            },
            {
                name: "Android Development",
                type: "framework",
            },
            

            {
                name: "Gradle",
                type: "framework",
            },

            {
                name: "JavaScript",
                type: "language",
            },

            {
                name: "Git",
                type: "framework",
            },
            {
                name: "SVN",
                type: "framework",
            },
            {
                name: "Photoshop",
                type: "framework",
            },

            {
                name: "JQuery",
                type: "framework",
            },







            {
                name: "NodeJS",
                type: "framework",
            },
            {
                name: ".NET Framework",
                type: "framework",
            },
            {
                name: "JSON",
                type: "framework",
            },
            

        ]
        // skills: [
        //     {
        //         name: "frameworks",
        //         items: [
        //             "coding",
        //             "secondar",
        //             "neverever",
        //             "coding",
        //             "fpimary",
        //             "test",
        //             "codd dfdfing",
        //         ],
        //     },
        //     {
        //         name: "languages",
        //         items: [
        //             "coding",
        //             "secondar",
        //             "neverever",
        //             "coding",
        //             "fpimary",
        //             "test",
        //             "codd dfdfing",
        //         ],
        //     },
        //     {
        //         name: "development",
        //         items: [
        //             "coding",
        //             "secondar",
        //             "neverever",
        //             "coding",
        //             "fpimary",
        //             "test",
        //             "codd dfdfing",
        //         ],
        //     },
        //     {
        //         name: "interpersonal",
        //         items: [
        //             "coding",
        //             "secondar",
        //             "neverever",
        //             "coding",
        //             "fpimary",
        //             "test",
        //             "codd dfdfing",
        //         ],
        //     }
        // ],
    }

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
                    <section className="content">
                        <About skills={this.state.skills}/>
                        <Projects projects={this.state.projects}/>
                        
                    </section>
                    <ContactMe />
                    <Footer />
                </div>
            </Router>
        );
    }
} 


export default App;
