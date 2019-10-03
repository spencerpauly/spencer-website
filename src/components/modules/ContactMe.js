import React, { Component } from 'react'
import "./ContactMe.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class ContactMe extends Component {

    render() {
        return (
            <div id="contact" className="contactMeSection">
                <h2 >Contact Me</h2>
                <div className="contactFormWrapper">
                    <div className="contactForm">
                        <p>
                            This form can be used to contact me via email. 
                            If you prefer you can instead directly email me at spencerpauly@gmail.com. 
                            I will usually respond to any contact within 48 hours, so feel free to reach out. Thanks!
                        </p>
                        <div className="contactFormForm">
                            <Form method="POST" action="https://formspree.io/spencerpauly@gmail.com">
                                <Form.Group controlId="formBasicName">
                                    <Form.Label className="formLabel">Your Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="John Doe" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="formLabel">Email address</Form.Label>
                                    <Form.Control type="email" name="_replyto" placeholder="Enter email here" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="formLabel">Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button variant="formSubmit" type="submit" value="send">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ContactMe
