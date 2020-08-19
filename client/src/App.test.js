import React from "react";
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it("should render App component", () => {
  const { container, asFragment } = render(<App />)
  expect(container).toBeInTheDocument();
  expect(container).not.toBeNull();
  expect(asFragment()).toMatchSnapshot();

});