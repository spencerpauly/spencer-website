import React, { Component } from 'react'
import "./ContactMe.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class ContactMe extends Component {

    render() {
        return (
            <div className="contactMeSection">
                <h2>Contact Me</h2>
                <div class="contactFormWrapper">
                    <div class="contactForm">
                        <p>
                            This form can be used to contact me via email. 
                            If you prefer you can instead directly email me at spencerpauly@gmail.com. 
                            I will usually respond to any contact within 48 hours, so feel free to reach out. Thanks!
                        </p>

                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control placeholder="John Doe" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="formSubmit" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ContactMe
