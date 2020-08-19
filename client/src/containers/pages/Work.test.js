import React from "react";
import { render, cleanup } from '@testing-library/react';
import Work from './Work';

afterEach(cleanup);

it("should render Work component", () => {
  const { container } = render(<Work />)
  expect(container).toBeInTheDocument();
});