import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskList from "./TaskList";
import { Task } from "../../../types/common";
import { TASK_STATUS } from "../../../enums/common";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

describe("TaskList Component", () => {
  const mockTasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      status: TASK_STATUS.PENDING,
      details: "Task 1 details",
    },
    {
      id: "2",
      title: "Task 2",
      status: TASK_STATUS.COMPLETED,
      details: "Task 2 details",
    },
    {
      id: "3",
      title: "Task 3",
      status: TASK_STATUS.PENDING,
      details: "Task 3 details",
    },
  ];

  test("renders list of tasks correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <TaskList
          tasks={mockTasks}
          onToggleStatus={() => {}}
          onDeleteTask={() => {}}
          key={mockTasks[0].id}
        />
      </Provider>
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });
});
