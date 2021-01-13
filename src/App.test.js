import { render, screen } from "@testing-library/react";
import App from "../src/Route/index";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
