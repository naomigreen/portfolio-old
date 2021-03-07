import React from 'react';
import { render } from '@testing-library/react';
import { Image, LinkImage, LinkContact } from './Images';

test('should render Image component', () => {
	const { container } = render(<Image />);
	expect(container).toBeInTheDocument();
	expect(container.getElementsByTagName('img')).toHaveLength(1);
});

test('should render LinkImage component', () => {
	const { container } = render(<LinkImage />);
	expect(container).toBeInTheDocument();
	expect(container.getElementsByTagName('a')).toHaveLength(1);
	expect(container.getElementsByTagName('img')).toHaveLength(1);
});

test('should render LinkContact component', () => {
	const { container } = render(<LinkContact />);
	expect(container).toBeInTheDocument();
	expect(container.getElementsByTagName('a')).toHaveLength(1);
	expect(container.getElementsByTagName('img')).toHaveLength(1);
});
