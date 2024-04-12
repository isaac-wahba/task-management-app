import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectLoading,
  selectTasks,
  setFilter,
} from "../store/slices/tasksSlice";
import { Task } from "../types/common";
import { TASK_STATUS } from "../enums/common";
import { createSelector } from "@reduxjs/toolkit";

// Memoized selector for retrieving tasks and loading
const selectTasksAndLoading = createSelector(
  [selectTasks, selectLoading, selectFilter],
  (tasks, loading, filter: TASK_STATUS) => ({
    tasks,
    loading,
    filter,
  })
);

const useTaskFilter = () => {
  const dispatch = useDispatch();

  const { tasks, loading, filter } = useSelector(selectTasksAndLoading);

  const [updatedFilter, setFilterState] = useState<TASK_STATUS>(filter);
  const filteredTasks = useMemo(() => {
    if (updatedFilter === TASK_STATUS.ALL) {
      return tasks;
    }
    return tasks.filter((task: Task) => task.status === updatedFilter);
  }, [tasks, updatedFilter]);

  const handleSetFilter = (selectedFilter: TASK_STATUS) => {
    setFilterState(selectedFilter);
    dispatch(setFilter(selectedFilter));
  };

  return {
    tasks: filteredTasks,
    filter: updatedFilter,
    setFilter: handleSetFilter,
    loading,
  };
};

export default useTaskFilter;
