import React from "react";
import "./TaskView.scss";
import { Task } from "../../../types/types";
import { Link } from "react-router-dom";

interface TaskDetailsPageProps {
  task: Task | undefined;
}

const TaskView: React.FC<TaskDetailsPageProps> = ({ task }) => {
  return (
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
        <p>Task not found</p>
      )}
      <Link to="/">Back to tasks</Link>
    </div>
  );
};

export default TaskView;
