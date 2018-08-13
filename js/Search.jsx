// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
	// Older method to construct, assign state and bind mehtods with the context
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		searchTerm: 'this is some sort of debug statement'
	// 	};

	// 	this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	// }

	// Transform class properties still in 2

	state = {
		searchTerm: ''
	};
	handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
		// event is a synthetic event not exactly a DOM event. For performance. It's an event but not the one you think!
		this.setState({ searchTerm: event.target.value });
	};
	render() {
		return (
			<div className="search">
				<header>
					<h1>
						<span>mFlix</span>
					</h1>
					<input
						onChange={this.handleSearchTermChange}
						type="text"
						value={this.state.searchTerm}
						placeholder="Search"
					/>
				</header>
				<div>
					{preload.shows
						.filter(
							show => `${show.title} ${show.desciption}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
						)
						.map(show => (
							<ShowCard key={show.imdbID} {...show} />
						))}
				</div>
			</div>
		);
	}
}

export default Search;
