import "./TaskView.scss";
import { Task } from "../../../types/common";
import { Link } from "react-router-dom";
import StatusIndicator from "../../atoms/StatusIndicator/StatusIndicator";
import { capitalizeFirstLetter } from "../../../utils/stringUtils";

interface TaskDetailsPageProps {
  task: Task | undefined;
}

const TaskView: React.FC<TaskDetailsPageProps> = ({ task }) => {
  return (
    <>
      <div className="task-view">
        {task && (
          <div className="task-details">
            <div>
              <strong>Title:</strong> {task.title}
            </div>
            <div className="status-container">
              <strong>Status:</strong>
              <StatusIndicator status={task.status} />
              {capitalizeFirstLetter(task.status)}
            </div>

            <div>
              <strong>Description:</strong> {task.details}
            </div>
          </div>
        )}
      </div>
      <div className="back-to-list">
        <div className="back-action">
          <Link to="/">Back to tasks</Link>
        </div>
      </div>
    </>
  );
};

export default TaskView;
