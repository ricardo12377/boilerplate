import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { describe } from "node:test";
import { PageTitle } from ".";

describe("render", () => {
  it("it should render div", () => {
    render(<PageTitle title="Hi" />);

    const title = screen.getByTestId("hi");

    expect(title).toBeInTheDocument();
  });
});
