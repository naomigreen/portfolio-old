import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
	const { asFragment } = render(<App />);

	it('should render App component', () => {
		expect(asFragment()).toMatchSnapshot();
	});
});
