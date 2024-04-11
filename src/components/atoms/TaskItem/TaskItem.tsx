import "./TaskItem.scss";
import StatusIndicator from "../StatusIndicator/StatusIndicatr";
import StatusToggle from "../StatusToggle/StatusToggle";
import { Task } from "../../../types/common";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useConfirmationModal } from "../../../hooks/useConfirmationModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { COLORS } from "./../../../assets/styles/colors";

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
  const { isOpen, openModal, closeModal, handleConfirm } =
    useConfirmationModal();

  const handleDeleteClick = () => {
    openModal(() => onDeleteTask(task.id));
  };
  return (
    <>
      <div className="task-item">
        <div className="title-status-container">
          <span className="indicator">
            <StatusIndicator status={task.status} />
          </span>
          <Link to={`/tasks/${task.id}`}>
            <span title={`View "${task.title}" details..`} className="title">
              {task.title}
            </span>
          </Link>
        </div>
        <div className="task-actions">
          <StatusToggle
            status={task.status}
            onToggle={() => onToggleStatus(task.id)}
          />
          <Button
            onClick={handleDeleteClick}
            primaryColor={COLORS.DANGER}
            hoverColor={COLORS.DANGER_DARKER}
          >
            Delete
          </Button>
        </div>
      </div>
      {isOpen && (
        <ConfirmationModal
          isOpen={isOpen}
          onConfirm={handleConfirm}
          onCancel={closeModal}
          message="Are you sure you want to delete this task?"
        />
      )}
    </>
  );
};

export default TaskItem;
