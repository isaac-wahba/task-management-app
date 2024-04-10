import "./TaskItem.scss";
import StatusIndicator from "../StatusIndicator/StatusIndicatr";
import StatusToggle from "../StatusToggle/StatusToggle";
import { Task } from "../../../types/types";
import Button from "../Button/Button";

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
      <span>{task.title}</span>
      <div className="task-actions">
        <StatusToggle
          status={task.status}
          onToggle={() => onToggleStatus(task.id)}
        />
        <StatusIndicator status={task.status} />
        <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
      </div>
    </div>
  );
};

export default TaskItem;
