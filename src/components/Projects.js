import React from 'react';
import './Projects.css';

function Projects(props) {
	return (
		<div className='projects__div'>
			<h2>Projects</h2>
			<ul className='projects__ul'>
				<li>
					<a href='https://divers-discovery.netlify.app' target='_blank'>
						Capstone Here
					</a>
				</li>
				<li>
					<a href='https://colortheory.netlify.app/' target='_blank'>
						Color Theory
					</a>
				</li>
				<li>
					<a href='https://ramag1.github.io/emoji-memory/' target='_blank'>
						The Game Of Memory
					</a>
				</li>
				<li>
					<a href='https://flexfive.netlify.app/' target='_blank'>
						Flex Five
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Projects;
