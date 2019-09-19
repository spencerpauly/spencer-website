import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Badge from 'react-bootstrap/Badge'
import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graduationCap } from '@fortawesome/free-solid-svg-icons'

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
                <p><FontAwesomeIcon icon={graduationCap} /> University of Minnesota Duluth</p>
                
            </div>
        )
    }
}

//PropTypes
About.propTypes = {
    skills: PropTypes.array.isRequired
}


export default About;