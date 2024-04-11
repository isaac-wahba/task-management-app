import { useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleTaskStatus,
} from "../store/slices/tasksSlice";
import { Task } from "../types/common";

export const useTaskActions = () => {
  const dispatch = useDispatch();

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task));
  };

  const handleToggleStatus = (id: string) => {
    dispatch(toggleTaskStatus(id));
  };
  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };
  return { handleAddTask, handleToggleStatus, handleDeleteTask };
};
