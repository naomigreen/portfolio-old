import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import axiosMock from "axios";
import { useFetch } from "./hooks";

afterEach(cleanup);

it("fetches and displays data", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { msg: "when you fancy pancakes but it's too late for carbs" } });

  const url = "/greeting";
  const { getByTestId } = render(<useFetch url={url} />);

  expect(getByTestId("loading")).toHaveTextContent("Loading data...");

  const resolvedSpan = await waitForElement(() => getByTestId("resolved"));

  expect(resolvedSpan).toHaveTextContent("hello there");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
