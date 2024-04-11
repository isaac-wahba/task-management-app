import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoDataView from "./NoDataView";

describe("NoDataView Component", () => {
  test("renders message correctly", () => {
    const message = "No tasks to display";
    render(<NoDataView message={message} />);

    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});
