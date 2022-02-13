import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { FiMenu } from 'react-icons/fi';
import './Nav.css';
// import { MdClose } from 'react-icons/md';
// import { FiMenu } from 'react-icons/fi';

function Nav(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
			setNavbarOpen(!navbarOpen);
		};
    const closeMenu = () => {
			setNavbarOpen(false);
		};

	return (
		<nav className='navBar'>
			<button className='FiMenu' onClick={handleToggle}><FiMenu/></button>
			<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
				<li>
					<Link
						to='/'
						activeClassName='active-link'
						onClick={() => closeMenu()}
						exact>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='/about'
						activeClassName='active-link'
						onClick={() => closeMenu()}
						exact>
						About
					</Link>
				</li>
				<li>
					<Link
						to='/projects'
						activeClassName='active-link'
						onClick={() => closeMenu()}
						exact>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to='/skills'
						activeClassName='active-link'
						onClick={() => closeMenu()}
						exact>
						Skills
					</Link>
				</li>
				<li>
					<Link
						to='/resume'
						activeClassName='active-link'
						onClick={() => closeMenu()}
						exact>
						Resume
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;


// 	return (
// 		<nav className='navBar'>
// 			<button className='FiMenu' onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button>
// 			<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
// 				<li>
// 					<Link
// 						to='/'
// 						activeClassName='active-link'
// 						onClick={() => closeMenu()}
// 						exact>
// 						Home
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						to='/about'
// 						activeClassName='active-link'
// 						onClick={() => closeMenu()}
// 						exact>
// 						About
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						to='/projects'
// 						activeClassName='active-link'
// 						onClick={() => closeMenu()}
// 						exact>
// 						Projects
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						to='/skills'
// 						activeClassName='active-link'
// 						onClick={() => closeMenu()}
// 						exact>
// 						Skills
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						to='/resume'
// 						activeClassName='active-link'
// 						onClick={() => closeMenu()}
// 						exact>
// 						Resume
// 					</Link>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// }

// export default Nav;
