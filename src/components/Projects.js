import React from 'react';
import './Projects.css';

function Projects(props) {
	return (
		<div className='projects__div'>
			<h2>Projects</h2>
			<ul className='projects__ul'>
				<li>
					<a href='https://divers-discovery.netlify.app' target='_blank'>
						Divers Discovery
					</a>
					<p>
						Solo, capstone project of a fullstack application coded in React
						using JavaScript and CSS, backend coded in PostgreSQL, Python and
						Django. Includes full user authentication and CRUD functionality.
						Mobile responsive design.
					</p>
				</li>
				<li>
					<a href='https://flexfive.netlify.app/' target='_blank'>
						Flex Five
					</a>
					<p>
						Front-end SCRUM lead for group collaboration utilizing MongoDB,
						Mongoose, Express, React and Node.js. Managed React component
						planning, state/context flow management, and user navigation to
						ensure a seamless experience.
					</p>
				</li>
				<li>
					<a href='https://colortheory.netlify.app/' target='_blank'>
						Color Theory
					</a>
					<p>
						Solo project using React, coded in JavaScript. Interactive design
						producing curated color schemes. Mobile responsive design.
					</p>
				</li>
				<li>
					<a href='https://ramag1.github.io/emoji-memory/' target='_blank'>
						The Game Of Memory
					</a>
					<p>
						Utilizes HTML, CSS, JavaScript and responsive design to implement
						game logic. Mobile responsive design and includes 2 interfaces:
						Emoji and Superhero.
					</p>
				</li>
			</ul>
		</div>
	);
}

export default Projects;
