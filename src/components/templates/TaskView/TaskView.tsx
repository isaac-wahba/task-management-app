import "./TaskView.scss";
import { Task } from "../../../types/common";
import { Link } from "react-router-dom";
import NoDataView from "../NoDataView/NoDataView";

interface TaskDetailsPageProps {
  task: Task | undefined;
}

const TaskView: React.FC<TaskDetailsPageProps> = ({ task }) => {
  return (
    <>
      <div className="task-view">
        <h2>Task Details</h2>
        {task ? (
          <div className="task-details">
            <div>
              <strong>Title:</strong> {task.title}
            </div>
            <div>
              <strong>Description:</strong> {task.details}
            </div>
            <div>
              <strong>Status:</strong> {task.status}
            </div>
          </div>
        ) : (
          <NoDataView message="Task not found" />
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
