import { TASK_STATUS } from "../../../enums/common";
import "./StatusToggle.scss";

interface StatusToggleProps {
  status: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
  onToggle: () => void;
}

const StatusToggle: React.FC<StatusToggleProps> = ({ status, onToggle }) => {
  return (
    <div
      className={`status-toggle ${
        status === TASK_STATUS.COMPLETED ? "complete" : "pending"
      }`}
      onClick={onToggle}
    >
      {status === TASK_STATUS.COMPLETED
        ? "Mark as Pending"
        : "Mark as Completed"}
    </div>
  );
};

export default StatusToggle;
