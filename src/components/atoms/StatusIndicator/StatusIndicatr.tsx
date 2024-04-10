import { TASK_STATUS } from "../../../enums/common";
import "./StatusIndicator.scss";

interface StatusIndicatorProps {
  status: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return <div className={`status-indicator ${status}`}></div>;
};

export default StatusIndicator;
