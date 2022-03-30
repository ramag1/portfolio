import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import './Nav.css';


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
			<button className="navbar__button" onClick={handleToggle}> 
				{navbarOpen ? ( 
				<MdClose style={{ color: '#fff', width: '40px', height: '30px ' }} />
				) : ( 
				<FiMenu style={{ color: '#383838', width: '40px', height: '30px' }}/> )}
			</button>
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
						Skills & Resume
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
