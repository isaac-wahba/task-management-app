import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskItem from "./TaskItem";
import { TASK_STATUS } from "../../../enums/common";
import { Task } from "../../../types/common";

jest.mock("react-router-dom", () => ({
  Link: jest.fn(({ children, ...rest }) => <a {...rest}>{children}</a>),
}));

describe("TaskItem Component", () => {
  const mockTask: Task = {
    id: "1",
    title: "Test Task",
    status: TASK_STATUS.COMPLETED,
    details: "This is a test task",
  };

  test("renders task item correctly", () => {
    render(
      <TaskItem
        task={mockTask}
        onDeleteTask={() => {}}
        onToggleStatus={() => {}}
      />
    );
    const taskTitle = screen.getByText(mockTask.title);
    const markStatusButton = screen.getByAltText("mark as pending");
    const deleteButton = screen.getByAltText("delete");

    expect(taskTitle).toBeInTheDocument();
    expect(markStatusButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
