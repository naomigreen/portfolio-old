import React from "react";
import { render, cleanup } from '@testing-library/react';
import Routes from './Routes';

afterEach(cleanup);

it("should render Routes component", () => {
  const { container, asFragment } = render(<Routes />)
  expect(container).toBeInTheDocument();
  expect(container).not.toBeNull();

  expect(asFragment()).toMatchSnapshot();

});