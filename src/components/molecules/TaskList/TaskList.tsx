import "./TaskList.scss";
import TaskItem from "../../atoms/TaskItem/TaskItem";
import { Task } from "../../../types/types";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, deleteTask } from "../../../store/slices/tasksSlice";

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleStatus }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = (id: string) => {
    dispatch(toggleTaskStatus(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={handleToggleStatus}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
