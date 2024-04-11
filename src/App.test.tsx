import { render } from "@testing-library/react";
import App from "./containers/App/App";

test("renders app", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
