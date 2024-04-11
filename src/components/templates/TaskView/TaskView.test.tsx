import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import TaskView from "./TaskView";
import { TASK_STATUS } from "../../../enums/common";
import { Task } from "../../../types/common";

describe("TaskView Component", () => {
  const mockTask: Task = {
    id: "1",
    title: "Test Task",
    status: TASK_STATUS.PENDING,
    details: "Test Task Details",
  };

  test("renders task details correctly", () => {
    render(
      <Router>
        <TaskView task={mockTask} />
      </Router>
    );

    const titleElement = screen.getByText(mockTask.title);
    const statusElement = screen.getByText("Pending");
    const detailsElement = screen.getByText(mockTask.details);

    expect(titleElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(detailsElement).toBeInTheDocument();
  });

  test('renders "Task not found" message when task is undefined', () => {
    render(
      <Router>
        <TaskView task={undefined} />
      </Router>
    );

    const messageElement = screen.getByText("Task not found");
    expect(messageElement).toBeInTheDocument();
  });

  test("renders back to tasks link", () => {
    render(
      <Router>
        <TaskView task={mockTask} />
      </Router>
    );

    const linkElement = screen.getByRole("link", { name: "Back to tasks" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
