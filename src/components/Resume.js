import React from 'react';
import {Link} from 'react-router-dom'

function Resume(props) {
	return (
		<div>
			<h2>Resume</h2>
			<Link to='../Magley-Resume.pdf' download target='_blank'>
				Click to download
			</Link>
		</div>
	);
}

export default Resume;
