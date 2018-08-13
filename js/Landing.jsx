// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
	<div className="landing">
		<h1>
			<span>mFlix</span>
		</h1>
		<input type="text" placeholder="search" />
		<Link to="/search">
			<span>or Browse all</span>
		</Link>
	</div>
);

export default Landing;
