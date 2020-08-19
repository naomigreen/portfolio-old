import React from "react";
import { render, cleanup } from '@testing-library/react';
import Contact from './Contact';

afterEach(cleanup);

it("should render Contact component", () => {
  const { container } = render(<Contact />)
  expect(container).toBeInTheDocument();
});