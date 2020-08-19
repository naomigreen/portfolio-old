import React from "react";
import { render, cleanup } from '@testing-library/react';
import Home from './Home';

afterEach(cleanup);

it("should render Home component", () => {
  const { container } = render(<Home />)
  expect(container).toBeInTheDocument();
});