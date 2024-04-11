import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Task } from "../../types/common";
import { TASK_STATUS } from "../../enums/common";
import { initialTasksList } from "../../constants/constants";

interface TasksState {
  tasks: Task[];
  filter: TASK_STATUS.ALL | TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}

const initialState: TasksState = {
  tasks: initialTasksList,
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
