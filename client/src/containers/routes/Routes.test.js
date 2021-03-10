import React from 'react';
import { render } from '@testing-library/react';
import Routes from './Routes';

describe('Routes component', () => {
  const { asFragment, getByRole } = render(<Routes />);

  it('should render Routes component', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  expect(getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Work' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Demo' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Contact' })).toBeInTheDocument();
});
