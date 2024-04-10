import "./TaskItem.scss";
import StatusIndicator from "../StatusIndicator/StatusIndicatr";
import StatusToggle from "../StatusToggle/StatusToggle";
import { Task } from "../../../types/types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleStatus,
  onDeleteTask,
}) => {
  return (
    <div className="task-item">
      <Link to={`/tasks/${task.id}`} className="task-link">
        <span>{task.title}</span>{" "}
      </Link>
      <div className="task-actions">
        <StatusToggle
          status={task.status}
          onToggle={() => onToggleStatus(task.id)}
        />
        <StatusIndicator status={task.status} />
        <Button
          onClick={() => onDeleteTask(task.id)}
          primaryColor="#C0392B"
          hoverColor="#96281B"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
