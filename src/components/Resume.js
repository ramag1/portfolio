import React from 'react';
import {Link} from 'react-router-dom'
import './Resume.css'

function Resume(props) {
	return (
		<div className='resume__div'>
			<h2>Resume</h2>
			<p className='resume__p'><Link to='../Magley-Resume.pdf' download target='_blank'>
				Click to download
			</Link></p>
		</div>
	);
}

export default Resume;
