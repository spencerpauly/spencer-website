import React from 'react'
import Badge from 'react-boostrap/Badge'

function About() {

    skillBadges = (badges) => {
        if (badges) {
            return badges.map((badge) => (
                <Badge variant="language" className="projectBadge">{badge}</Badge>
            ))    
        }
    }

    return (
        <React.Fragment>
            {this.skillBadges(this.props.skills)}
        </React.Fragment>
    )
}

//PropTypes
Project.propTypes = {
    skills: PropTypes.object.isRequired
}


export default About;