import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialTasksList } from "../constants/constants";

// Simulate an API call with delay
export const fetchInitialTasks = createAsyncThunk(
  "tasks/fetchInitialTasks",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the initial tasks list
    return initialTasksList;
  }
);
