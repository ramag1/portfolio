import React from 'react';
import {Link} from 'react-router-dom';
import './Skills.css'

function Skills(props) {
	return (
		<div className='skills__div'>
			<h2>Skills</h2>
			<h3>Languages</h3>
			<p>HTML | CSS3 | JavaScript | TypeScript | Python </p>
			<h3>Frameworks</h3>
			<p>React | Node | Express | AJAX | Django</p>
			<h3>
				Databases, Management <br />& Deployment:
			</h3>
			<p>
				SQL | PostgreSQL | MongoDB | API’s | Git/Github | Terminal | Heroku{' '}
			</p>

			<h2>Resume</h2>
			<p className='resume__p'>
				<Link to='../Magley-Resume.pdf' download target='_blank'>
					Click to download
				</Link>
			</p>
		</div>
	);
}

export default Skills;
