import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Task } from "../../types/types";

interface TasksState {
  tasks: Task[];
  filter: "all" | "completed" | "pending";
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      status: "completed",
      details: "Task 1 details",
    },
    { id: "2", title: "Task 2", status: "pending", details: "Task 2 details" },
    {
      id: "3",
      title: "Task 3",
      status: "completed",
      details: "Task 3 details",
    },
  ],
  filter: "all",
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
        task.status = task.status === "completed" ? "pending" : "completed";
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (
      state,
      action: PayloadAction<"all" | "completed" | "pending">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskStatus, deleteTask, setFilter } =
  tasksSlice.actions;

export const selectTasks = (state: RootState) => {
  const { tasks, filter } = state.tasks;
  if (filter === "all") {
    return tasks;
  } else {
    return tasks.filter((task) => task.status === filter);
  }
};
export default tasksSlice.reducer;
