import React from 'react';
import './Skills.css'

function Skills(props) {
	return (
		<div className='skills__div'>
			<h2>Skills</h2>
			<h3>Languages</h3>
			<p>HTML | CSS3 | JavaScript | TypeScript | Python </p>
			<h3>Frameworks</h3>
			<p>React | Node | Express | AJAX | Django</p>
			<h3>Databases, Management <br/>& Deployment:</h3>
			<p>
				SQL | PostgreSQL | MongoDB | API’s | Git/Github | Terminal | Heroku{' '}
			</p>
		</div>
	);
}

export default Skills;
