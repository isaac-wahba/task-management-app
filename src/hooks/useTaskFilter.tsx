import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setFilter } from "../store/slices/tasksSlice";
import { Task } from "../types/types";

export type FilterOptions = "all" | "completed" | "pending";

const useTaskFilter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [filter, setFilterState] = useState<FilterOptions>("all");

  const filterTasks = () => {
    return tasks.filter((task: Task) => {
      if (filter === "all") return true;
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
