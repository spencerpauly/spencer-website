import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import { Image } from 'cloudinary-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

function Header() {
	return (
		<section id='header'>
			<header className='header'>
				<div className='imasd'>
					<Image
						className='headerImg'
						cloudName='spencerpauly'
						publicId='assets/avatar-1_lwtpeq.jpg'
						width='500'
						crop='scale'
					/>
				</div>

				<div>
					<h1>Spencer Pauly</h1>
					<p>Hello There!</p>
					<p>
						Welcome to my website! I built this site to serve as my homebase on the internet. It
						features my projects, skills, blog posts, future plans and anything else. If you have an
						inbound request, feel free to contact me below. Enjoy!
					</p>
					<RoundedButton href='#contact' variant='main'>
						Contact Me
					</RoundedButton>
				</div>
			</header>
			<div className='socialMediaButtons'>
				<a href='https://github.com/spencerpauly/' rel='noopener noreferrer' target='_blank'>
					<span className='fa-layers fa-fw iconWrapper'>
						<FontAwesomeIcon icon={faCircle} color='#212121' />
						<FontAwesomeIcon icon={faGithub} className='githubIcon' inverse transform='shrink-8' />
					</span>
				</a>
				<a
					href='https://www.linkedin.com/in/spencer-pauly-24803278/'
					rel='noopener noreferrer'
					target='_blank'
				>
					<span className='fa-layers fa-fw iconWrapper'>
						<FontAwesomeIcon icon={faCircle} color='#212121' />
						<FontAwesomeIcon
							icon={faLinkedinIn}
							className='linkedinIcon'
							inverse
							transform='shrink-8'
						/>
					</span>
				</a>
				<a
					href='https://www.instagram.com/spencer_pauly/'
					rel='noopener noreferrer'
					target='_blank'
				>
					<span className='fa-layers fa-fw iconWrapper'>
						<FontAwesomeIcon icon={faCircle} color='#212121' />
						<FontAwesomeIcon
							icon={faInstagram}
							className='instagramIcon'
							inverse
							transform='shrink-8'
						/>
					</span>
				</a>
				<a
					href='https://open.spotify.com/user/1265902628/'
					rel='noopener noreferrer'
					target='_blank'
				>
					<span className='fa-layers fa-fw iconWrapper'>
						<FontAwesomeIcon icon={faCircle} color='#212121' />
						<FontAwesomeIcon
							icon={faSpotify}
							className='spotifyIcon'
							inverse
							transform='shrink-8'
						/>
					</span>
				</a>
			</div>
		</section>
	);
}
export default Header;

const RoundedButton = styled(Button)`
	border-radius: 20px;
`;
