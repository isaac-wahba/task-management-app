import { TASK_STATUS } from "../../../enums/common";
import { capitalizeFirstLetter } from "../../../utils/stringUtils";
import "./StatusIndicator.scss";

interface StatusIndicatorProps {
  status: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div
      title={capitalizeFirstLetter(status)}
      className={`status-indicator ${status}`}
    ></div>
  );
};

export default StatusIndicator;
