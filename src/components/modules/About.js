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
import { faMapPin } from '@fortawesome/free-solid-svg-icons'




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
            <Badge key={skillObject.name} variant={skillObject.type} className="skillBadge">{skillObject.name}</Badge>
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

            <div id="about" className="aboutSection">
                <h2>About Me</h2>
                <div className="aboutSectionFlexbox">
                    <div className="quickInfo">
                        <div>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faGraduationCap} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>University of Minnesota Duluth</b></span>                        
                        </div>
                        <div>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faBook} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Computer Science B.S.</b>
                            <ul className="relevantCourses">
                                <li>Marketing Minor</li>
                            </ul>
                            </span>
                        </div>
                        <div>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faCalendarWeek} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Graduation Year 2021</b></span>
                        </div>
                        <div>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faBookReader} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Relevant Courses:</b> 
                            <ul className="relevantCourses">
                                <li>Software Engineering</li>
                                <li>Computer Networks</li>
                                <li>Operating Systems</li>
                                <li>Artificial Intelligence</li>
                                <li>Software Analysis and Design</li>
                                <li>Computer Science II</li>
                                <li>Computer Science I</li>
                                <li>Calculus III</li>
                                <li>Physics II</li>
                                <li>Public Speaking</li>
                            </ul>
                            </span>                        
                        </div>
                        <div>
                            <span className="fa-layers fa-fw iconWrapper">
                                <FontAwesomeIcon icon={faCircle} color="#0984e3" />
                                <FontAwesomeIcon icon={faMapPin} inverse transform="shrink-8"/>
                            </span> 
                            <span className="iconText"><b>Minneapolis, MN</b></span>
                        </div>
                    </div>
                    <div className="bio">
                    <div className="aboutMeParagraph">
                            <h3>Summary</h3> 
                            <p className="aboutMeText">
                                I'm a <i>third year undergraduate student</i> studying Computer Science at the University of Minnesota Duluth. I'm located out of Minneapolis, MN and I have over 4 years of experience with software development. I enjoy working with the newest technologies and focusing on architecture when I build my projects. I have software development internship experience in the past and am hoping to get learn more as I move forward in my career!
                            </p>
                        </div>
                        <div className="aboutMeParagraph">
                            <h3>Work Experience</h3> 
                            <p className="aboutMeText">
                                <div className="jobHistoryFlexbox">
                                    <div className="jobHistoryFlexItem">Software Engineer Intern | Trane</div>
                                    <div className="jobHistoryFlexItem">May 2019 - August 2019</div>
                                </div>
                                Developed a reverse proxy server using C#, .NET framework and JavaScript to host their suite of web tools directly within one of their current desktop applications.

                                {/* <ul className="jobTalkingPoints">
                                    <li>Developed a reverse proxy server using C#, .NET framework and JavaScript to host their suite of web tools directly within one of their current desktop applications</li> 
                                    <li>Delivered project ahead of schedule and was able to get scope expanded and eventually implemented into production environment</li>                              
                                    <li>Collaborated with senior software engineers and management to make engineering decisions related to product and participate in group code and design reviews</li>
                                    <li>Fixed three software defects in their production tools</li>
                                </ul> */}
                            </p>
                            <p className="aboutMeText">
                                <div className="jobHistoryFlexbox">
                                    <div className="jobHistoryFlexItem">IT Intern | Trex Commercial Products</div>
                                    <div className="jobHistoryFlexItem">June 2018 - August 2018</div>
                                </div>
                                Deployed over 25 computers to employees while optimizing the deployment process for future deployments. Used tools in the windows configuration suite to assist in managing employee workstations.
                            </p>
                        </div>
                        <div className="aboutMeParagraph">
                            <h3>My Skills</h3> 
                            <p className="aboutMeText">
                                {/* I have numerous skills primarily in the areas of web development using modern technologies and software development in C# and Java. Below is a list of all the technologies I have experience in. */}
                            </p>
                            <div className="skillsBadgeContainer">
                                {this.drawAllBadgesSimple(this.props.skills)}
                            </div>
                            <div className="skillsLegend">
                                <ul>
                                    <li className="developmentColor"><FontAwesomeIcon icon={faCircle}/> <span>Software Development Strategies</span></li>
                                    <li className="languageColor"><FontAwesomeIcon icon={faCircle}/> <span>Programming Languages</span></li>
                                    <li className="interpersonalColor"><FontAwesomeIcon icon={faCircle}/> <span>Soft Skills</span></li>
                                    <li className="frameworkColor"><FontAwesomeIcon icon={faCircle}/> <span>Technologies and Frameworks</span></li>

                                </ul>
                            </div>
                        </div>

                        {/* <p className="workExperience">
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
                        </p> */}
                        <div className="aboutMeParagraph">
                            <h3>Interested? Hire Me!</h3> 
                            <p className="aboutMeText">
                                I'm currently seeking a <i>Software Engineering Internship position for the summer of 2020</i>. I would like the opportunity to work with modern technologies and an environment that allows me to learn and grow my portfolio of technical skills. I'm based out of the Minneapolis area but am willing and eager to relocate if necessary. If my website and resume interest you, please feel free to contact me and I will get back to you ASAP.
                            </p>
                        {/* </div>
                        <div className="aboutMeParagraph">
                            <p className="aboutMeText">
                                If you want to learn more feel free to click one of the links below. I will respond to communications usually within
                                48 hours so feel free to contact me. Thanks!

                            </p> */}
                            <p>
                                <Button href="https://drive.google.com/file/d/1QD_nj1-3Aq9fnJDxcjPZWCPZfUn15Byd/view?usp=sharing/" target="_blank" variant="project" className="moreInfoButton">View Resume Online (.pdf)</Button>
                                {/* <Button href="#contact" variant="github" className="moreInfoButton contactMeBtnInAboutMe">Contact Me</Button> */}

                            </p>
                        </div>
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