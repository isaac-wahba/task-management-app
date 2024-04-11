import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeleteTaskAction from "./DeleteTaskAction";

describe("DeleteTaskAction Component", () => {
  test("renders delete icon", () => {
    const onClick = jest.fn();
    render(<DeleteTaskAction onClick={onClick} />);
    const deleteIcon = screen.getByAltText("delete");
    expect(deleteIcon).toBeInTheDocument();
  });

  test("handles click event", () => {
    const onClick = jest.fn();
    render(<DeleteTaskAction onClick={onClick} />);
    const deleteIcon = screen.getByAltText("delete");
    fireEvent.click(deleteIcon);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
