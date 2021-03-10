import React from 'react';
import { render } from '@testing-library/react';
import Work from './Work';


describe('Work component', () => {
  const { asFragment } = render(<Work />);

  it('should render Work component', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
