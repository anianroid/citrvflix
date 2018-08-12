import React from 'react';
import { shallow } from 'enzyme'; // enzyme imports renderer under the hood so, should not import renderer seperately
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// NODE_ENV is set to test by jest automatically
// test(..) is a global functions and doesn't need to be imported
test('Search renders correctly', () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});

test('Search should render correct amount of rows', () => {
	const component = shallow(<Search />);
	expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of rows based on search term', () => {
	const component = shallow(<Search />);
	const searchWord = 'black';
	component.find('input').simulate('change', { target: { value: searchWord } });
	const showCount = preload.shows.filter(
		show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
	).length;
	expect(component.find(ShowCard).length).toEqual(showCount);
});

/*
Grouping test cases using describe (the one below forms something like a test suite for Search)

describe('Search', () => {
	it('renders correctly', () => {
		const component = shallow(<Search />);
		expect(component).toMatchSnapshot();
	});

	it('should render correct amount fo rows', () => {
		const component = shallow(<Search />);
		expect(preload.shos.length).toEqual(component.find(<ShowCard />).length);
	});

	it('should render correct amount of rows based on search term', () => {});
});

*/
