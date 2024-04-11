import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StatusIndicator from "./StatusIndicator";
import { TASK_STATUS } from "../../../enums/common";

describe("StatusIndicator Component", () => {
  test("renders correctly for pending status", () => {
    render(<StatusIndicator status={TASK_STATUS.PENDING} />);
    const indicator = screen.getByTitle("Pending");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass("status-indicator");
    expect(indicator).toHaveClass("pending");
  });

  test("renders correctly for completed status", () => {
    render(<StatusIndicator status={TASK_STATUS.COMPLETED} />);
    const indicator = screen.getByTitle("Completed");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass("status-indicator");
    expect(indicator).toHaveClass("completed");
  });
});
