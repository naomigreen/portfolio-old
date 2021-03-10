import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact component', () => {
	const { asFragment } = render(<Contact />);

	it('should render Contact component', () => {
		expect(asFragment()).toMatchSnapshot();
	});

});
