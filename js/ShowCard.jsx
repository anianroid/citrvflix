// @flow

import React from 'react';
import styled from 'styled-components';

const color = ' #333'; // Just to show variables can be used in tagged temlate literal while defining styles
// This type of styling gets parsed twise (once by the javascript parser and then by the CSS parser) : Paying double the parse cost
// styled.div returns a component a div that has been styled like this
const Wrapper = styled.div`
	width: 32%;
	border: 2px solid ${color};
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 46%;
	float: right;
	margin-right: 10px;
`;

const ShowCard = (props: { poster: string, title: string, year: string, description: string }) => (
	<Wrapper>
		<Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
		<div>
			<h3>{props.title}</h3>
			<h4>({props.year})</h4>
			<p>{props.description}</p>
			<p>Something new!</p>
		</div>
	</Wrapper>
);

export default ShowCard;
