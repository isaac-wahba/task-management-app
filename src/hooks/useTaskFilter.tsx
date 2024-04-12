import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectTasks,
  setFilter,
} from "../store/slices/tasksSlice";
import { Task } from "../types/common";
import { TASK_STATUS } from "../enums/common";
import { createSelector } from "@reduxjs/toolkit";

// Memoized selector for retrieving tasks and loading
const selectTasksAndLoading = createSelector(
  [selectTasks, selectLoading],
  (tasks, loading) => ({
    tasks,
    loading,
  })
);

const useTaskFilter = () => {
  const dispatch = useDispatch();

  const { tasks, loading } = useSelector(selectTasksAndLoading);

  const [filter, setFilterState] = useState<TASK_STATUS>(TASK_STATUS.ALL);
  console.log(filter);
  const filteredTasks = useMemo(() => {
    if (filter === TASK_STATUS.ALL) {
      return tasks;
    }
    return tasks.filter((task: Task) => task.status === filter);
  }, [tasks, filter]);

  const handleSetFilter = (selectedFilter: TASK_STATUS) => {
    setFilterState(selectedFilter);
    dispatch(setFilter(selectedFilter));
  };

  return {
    tasks: filteredTasks,
    filter,
    setFilter: handleSetFilter,
    loading,
  };
};

export default useTaskFilter;
