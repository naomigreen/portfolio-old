import React from "react";
import { render, cleanup } from '@testing-library/react';
import Demo from './Demo';

afterEach(cleanup);

it("should render Demo component", () => {
  const { container } = render(<Demo />)
  expect(container).toBeInTheDocument();
});