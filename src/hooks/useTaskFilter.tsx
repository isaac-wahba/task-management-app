import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setFilter } from "../store/slices/tasksSlice";
import { Task } from "../types/types";
import { TASK_STATUS } from "../enums/common";

export type FilterOptions =
  | TASK_STATUS.ALL
  | TASK_STATUS.COMPLETED
  | TASK_STATUS.PENDING;

const useTaskFilter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [filter, setFilterState] = useState<FilterOptions>(TASK_STATUS.ALL);

  const filterTasks = () => {
    return tasks.filter((task: Task) => {
      if (filter === TASK_STATUS.ALL) return true;
      return task.status === filter;
    });
  };

  const handleSetFilter = (selectedFilter: FilterOptions) => {
    setFilterState(selectedFilter);
    dispatch(setFilter(selectedFilter));
  };

  return {
    tasks: filterTasks(),
    filter,
    setFilter: handleSetFilter,
  };
};

export default useTaskFilter;
