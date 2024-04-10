import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Task } from "../../types/types";
import { TASK_STATUS } from "../../enums/common";

interface TasksState {
  tasks: Task[];
  filter: TASK_STATUS.ALL | TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Set up project repository",
      status: TASK_STATUS.PENDING,
      details:
        "Create a new GitHub repository for the project, initialize it with necessary files, and set up version control.",
    },
    {
      id: "2",
      title: "Design user interface mockups",
      status: TASK_STATUS.COMPLETED,
      details:
        "Create mockups and wireframes for the user interface using tools like Figma or Sketch, considering user experience principles and design best practices.",
    },
    {
      id: "3",
      title: "Implement responsive layout",
      status: TASK_STATUS.PENDING,
      details:
        "Develop responsive layout and design using HTML and CSS frameworks like Bootstrap or Tailwind CSS, ensuring compatibility across different devices and screen sizes.",
    },
    {
      id: "4",
      title: "Integrate API endpoints",
      status: TASK_STATUS.PENDING,
      details:
        "Integrate with backend API endpoints to fetch and display data dynamically using technologies like Axios or Fetch API, ensuring proper error handling and data validation.",
    },
    {
      id: "5",
      title: "Implement authentication",
      status: TASK_STATUS.COMPLETED,
      details:
        "Implement user authentication and authorization features using OAuth 2.0 or JWT (JSON Web Tokens), providing secure access to protected routes and resources.",
    },
    {
      id: "6",
      title: "Optimize performance",
      status: TASK_STATUS.PENDING,
      details:
        "Optimize website performance by minimizing resource load times, leveraging browser caching, and implementing lazy loading techniques for images and assets.",
    },
    {
      id: "7",
      title: "Write unit tests",
      status: TASK_STATUS.COMPLETED,
      details:
        "Write unit tests using testing frameworks like Jest or Mocha, covering critical components and functionality to ensure code reliability and maintainability.",
    },
  ],
  filter: TASK_STATUS.ALL,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status =
          task.status === TASK_STATUS.COMPLETED
            ? TASK_STATUS.PENDING
            : TASK_STATUS.COMPLETED;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (
      state,
      action: PayloadAction<
        TASK_STATUS.ALL | TASK_STATUS.COMPLETED | TASK_STATUS.PENDING
      >
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskStatus, deleteTask, setFilter } =
  tasksSlice.actions;

export const selectTasks = (state: RootState) => {
  const { tasks, filter } = state.tasks;
  if (filter === TASK_STATUS.ALL) {
    return tasks;
  } else {
    return tasks.filter((task) => task.status === filter);
  }
};

export const selectTaskById = (state: RootState, taskId: string) =>
  state.tasks.tasks.find((task) => task.id === taskId);

export default tasksSlice.reducer;
