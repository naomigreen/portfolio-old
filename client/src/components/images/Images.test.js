import React from "react";
import { render, cleanup } from '@testing-library/react';
import Image from './Images';

afterEach(cleanup);

it("should render image component", () => {
  const { container } = render(<Image />)
  expect(container).toBeInTheDocument();
});