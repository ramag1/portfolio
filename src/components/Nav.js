import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Twirl as Hamburger } from 'hamburger-react';
// import Hamburger from './Hamburger';
// import './Hamburger.css';
import './Nav.css';

function Nav(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);
    // const handleToggle = () => {
	// 	setNavbarOpen((prev) => !prev);
	// 	};
    const handleToggle = () => {
			setNavbarOpen(!navbarOpen);
		};

	return (
		<nav className='navBar'>
			<button onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button>
			<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
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
		</nav>
	);
}

export default Nav;
