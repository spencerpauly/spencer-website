import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Badge from 'react-bootstrap/Badge'
import './About.css'
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'



export class About extends Component {

    goldBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="gold" className="skillBadge">{badge}</Badge>
            ))
        }
    }

    blueBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="blue" className="skillBadge">{badge}</Badge>
            ))
        }
    }

    greenBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="green" className="skillBadge">{badge}</Badge>
            ))
        }
    }

    otherBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="other" className="skillBadge">{badge}</Badge>
            ))
        }
    }

    areChildrenEmpty = (array) => {
        array.forEach(function(element) {
            if (element === undefined || element.length === 0)  {
                return true;
            }
        });
        return false;
    }

    drawAllBadges = (skillsObject) => {
        var skills = [];
        skillsObject.forEach(function(skill) {
            skills.push(skill.items);
        });
        var newStack = [];

        console.log("skills", skills);

        while (!this.areChildrenEmpty(skills)) {
            let toAdd = [];

            skills.forEach(function(skill) {
                if (skill.length > 0) {
                    toAdd.push(skill.pop());
                }
            });


            console.log("toadd", toAdd);

            newStack.push(toAdd);
        }
        console.log("stack", newStack);

    }

    drawAllBadgesSimple = (skillsObject) => {
        return skillsObject.map((skillObject) => (
            <Badge variant={skillObject.type} className="skillBadge">{skillObject.name}</Badge>
        ))

    }

    render() {
        return ( 
            // <div className="skillsList">
            //     <h5>
            //         {/* {this.goldBadges(this.props.skills.frameworks)}
            //         {this.blueBadges(this.props.skills.languages)}
            //         {this.greenBadges(this.props.skills.development)}
            //         {this.otherBadges(this.props.skills.interpersonal)} */}

            //         {this.drawAllBadges(this.props.skills)}

            //     </h5>
            // </div>

            <div className="aboutSection">
                <h2>About Me</h2>
                <div className="aboutSectionFlexbox">
                    <div className="quickInfo">
                        <p>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faGraduationCap} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>University of Minnesota Duluth</b></span>                        
                        </p>
                        <p>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faBook} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Computer Science B.S.</b>
                            <ul className="relevantCourses">
                                <li>Marketing Minor</li>
                            </ul>
                            </span>
                        </p>
                        <p>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faCalendarWeek} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Graduation Year 2021</b></span>
                        </p>
                        <p>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faBookReader} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Relevant Courses:</b> 
                            <ul className="relevantCourses">
                                <li>Software Engineering</li>
                                <li>Computer Networks</li>
                                <li>Operating Systems</li>
                                <li>Software Analysis and Design</li>
                                <li>Computer Science II</li>
                                <li>Computer Science I</li>
                                <li>Calculus III</li>
                                <li>Physics II</li>
                                <li>Software Analysis and Design</li>
                            </ul>
                            </span>                        
                        </p>
                    </div>
                    <div className="bio">
                        <p>
                            <b>Objective</b> 
                            <p>
                                As a self-motivated, goal-oriented undergraduate student in computer science, I'm currently seeking an internship position for the summer of 2020 that will allow me to build products on a commercial scale. I have completed numerous personal projects, advanced courses, and previous internships that I believe would make me the perfect candidate for a software engineering internship.
                            </p>
                        </p>
                        <br />
                        <p>
                            <b>Skills</b>
                            <p>
                                I have numerous skills primarily in the areas of web development using modern technologies and software development in C# and Java. Below is a list of all the technologies I have experience in.
                            </p>
                        </p>
                        <div class="skillsBadgeContainer">
                            {this.drawAllBadgesSimple(this.props.skills)}
                        </div>
                        <div class="skillsLegend">
                            <ul>
                                <li class="developmentColor"><FontAwesomeIcon icon={faCircle}/> <span>Software Development Strategies</span></li>
                                <li class="languageColor"><FontAwesomeIcon icon={faCircle}/> <span>Programming Languages</span></li>
                                <li class="interpersonalColor"><FontAwesomeIcon icon={faCircle}/> <span>Soft Skills</span></li>
                                <li class="frameworkColor"><FontAwesomeIcon icon={faCircle}/> <span>Technologies and Frameworks</span></li>

                            </ul>
                        </div>
                        <p class="workExperience">
                            <b>Work Experience</b>
                            <p>
                               
                               <ul>
                                   <li>
                                        2019 - Software Engineering Intern - Trane - White Bear Lake, MN
                                   </li>
                                   <li>
                                       2019 - IT Intern - Trex Commercial Products
                                   </li>
                               </ul>
                            </p>
                        </p>
                        <p>
                            <p>
                                If you want to learn more feel free to click one of the links below. I will respond to communications usually within
                                48 hours so feel free to contact me. Thanks!

                            </p>
                            <p>
                                <Button href="" target="_blank" variant="github" className="moreInfoButton">View Resume (.pdf)</Button>

                            </p>
                        </p>

                    </div>
                </div>
                
            </div>
        )
    }
}

//PropTypes
About.propTypes = {
    skills: PropTypes.array.isRequired
}


export default About;