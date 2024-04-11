import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setFilter } from "../store/slices/tasksSlice";
import { Task } from "../types/common";
import { TASK_STATUS } from "../enums/common";

const useTaskFilter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [filter, setFilterState] = useState<TASK_STATUS>(TASK_STATUS.ALL);

  const filterTasks = () => {
    return tasks.filter((task: Task) => {
      if (filter === TASK_STATUS.ALL) return true;
      return task.status === filter;
    });
  };

  const handleSetFilter = (selectedFilter: TASK_STATUS) => {
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
