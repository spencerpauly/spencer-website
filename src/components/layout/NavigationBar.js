import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';
import { Image } from 'cloudinary-react';

export class NavigationBar extends Component {
	render() {
		return (
			<Navbar
				sticky='top'
				className='navbar'
				collapseOnSelect
				expand='lg'
				bg='black'
				variant='dark'
			>
				<Navbar.Brand href='/'>
					<Image
						className='navbarLogo d-inline-block align-top'
						cloudName='spencerpauly'
						publicId='projects/logo-secondary_mbjinr.png'
						width='100'
						crop='scale'
					/>{' '}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav>
						<Nav.Link href='#projects'>
							<span>My Projects</span>
						</Nav.Link>
						<Nav.Link href='#articles'>
							<span>My Articles</span>
						</Nav.Link>
						<Nav.Link href='#contact'>
							<span>Contact Me</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;
