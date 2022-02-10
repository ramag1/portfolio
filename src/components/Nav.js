import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Twirl as Hamburger } from 'hamburger-react';
import Hamburger from './Hamburger';
import './Hamburger.css';
import './Nav.css';

function Nav(props) {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<nav>
			<ul className='nav__ul'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/skills'>Skills</Link>
				</li>
				<li>
					<Link to='/resume'>Resume</Link>
				</li>
			</ul>
			<div className='hamburger' onClick={toggleHamburger}>
				<Hamburger />
			</div>
		</nav>
	);
}

export default Nav;
