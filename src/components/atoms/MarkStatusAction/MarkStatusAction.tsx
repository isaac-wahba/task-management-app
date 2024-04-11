import { TASK_STATUS } from "../../../enums/common";
import PendingIcon from "../../../assets/icons/pending.svg";
import CompleteIcon from "../../../assets/icons/complete.svg";

interface MarkStatusActionProps {
  status: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
  onToggle: () => void;
}

const MarkStatusAction: React.FC<MarkStatusActionProps> = ({
  status,
  onToggle,
}) => {
  return (
    <>
      {status && (
        <img
          onClick={onToggle}
          src={status === TASK_STATUS.COMPLETED ? PendingIcon : CompleteIcon}
          alt="mark as complete"
          width={18}
          height={18}
          style={{ cursor: "pointer" }}
          title={
            status === TASK_STATUS.COMPLETED
              ? "Mark as Pending"
              : "Mark as Completed"
          }
        />
      )}
    </>
  );
};

export default MarkStatusAction;
