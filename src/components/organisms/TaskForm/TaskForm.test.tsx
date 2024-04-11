import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskForm from "./TaskForm";
import { TASK_STATUS } from "../../../enums/common";

describe("TaskForm Component", () => {
  test("renders task form correctly", () => {
    const onSubmit = jest.fn();
    render(<TaskForm onSubmit={onSubmit} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const detailsInput = screen.getByPlaceholderText("Details");
    const addButton = screen.getByText("Add Task");

    expect(titleInput).toBeInTheDocument();
    expect(detailsInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("submits task correctly", () => {
    const onSubmit = jest.fn();
    render(<TaskForm onSubmit={onSubmit} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const detailsInput = screen.getByPlaceholderText("Details");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(titleInput, { target: { value: "Test Task" } });
    fireEvent.change(detailsInput, { target: { value: "Test details" } });
    fireEvent.click(addButton);

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Test Task",
        details: "Test details",
        status: TASK_STATUS.PENDING,
      })
    );
  });

  test("displays error message for empty title", () => {
    const onSubmit = jest.fn();
    render(<TaskForm onSubmit={onSubmit} />);

    const addButton = screen.getByText("Add Task");
    fireEvent.click(addButton);

    const errorMessage = screen.getByText("Title is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
