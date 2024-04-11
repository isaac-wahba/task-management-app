import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MarkStatusAction from "./MarkStatusAction";
import { TASK_STATUS } from "../../../enums/common";

describe("MarkStatusAction Component", () => {
  test("renders correctly for pending status", () => {
    const onToggle = jest.fn();
    render(
      <MarkStatusAction status={TASK_STATUS.PENDING} onToggle={onToggle} />
    );
    const icon = screen.getByAltText("mark as completed");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("title", "Mark as Completed");
  });

  test("renders correctly for completed status", () => {
    const onToggle = jest.fn();
    render(
      <MarkStatusAction status={TASK_STATUS.COMPLETED} onToggle={onToggle} />
    );
    const icon = screen.getByAltText("mark as pending");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("title", "Mark as Pending");
  });

  test("triggers onToggle function on click", () => {
    const onToggle = jest.fn();
    render(
      <MarkStatusAction status={TASK_STATUS.PENDING} onToggle={onToggle} />
    );
    const icon = screen.getByAltText("mark as completed");
    fireEvent.click(icon);
    expect(onToggle).toHaveBeenCalled();
  });
});
