import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialTasksList } from "../constants/constants";

// Simulate an API call delay
export const fetchInitialTasks = createAsyncThunk(
  "tasks/fetchInitialTasks",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the initial tasks list
    console.log(initialTasksList);
    return initialTasksList;
  }
);
