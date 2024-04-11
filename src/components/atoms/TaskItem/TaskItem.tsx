import "./TaskItem.scss";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import { Task } from "../../../types/common";
import { useConfirmationModal } from "../../../hooks/useConfirmationModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import MarkStatusAction from "../MarkStatusAction/MarkStatusAction";
import DeleteTaskAction from "../DeleteTaskAction/DeleteTaskAction";
import ViewTaskDetailsAction from "../ViewTaskDetailsAction/ViewTaskDetailsAction";
import { capitalizeFirstLetter } from "../../../utils/stringUtils";

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
          <span
            title={`${task.title} - ${capitalizeFirstLetter(task.status)}`}
            className="title"
          >
            {task.title}
          </span>
        </div>
        <div className="task-actions">
          <ViewTaskDetailsAction link={`/tasks/${task.id}`} />
          <MarkStatusAction
            status={task.status}
            onToggle={() => onToggleStatus(task.id)}
          />
          <DeleteTaskAction onClick={handleDeleteClick} />
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
