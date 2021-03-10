import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  const { asFragment } = render(<Home />);

  it('should render Home component', () => {
    expect(asFragment()).toMatchSnapshot();
  });


});
