import { render, screen } from "@testing-library/react";

import { Main } from "../index";

describe("components/Main", () => {
  it("should render properly", () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole("heading", { name: /main component/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
