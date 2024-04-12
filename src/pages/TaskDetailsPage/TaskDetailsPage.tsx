import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TaskView from "../../components/templates/TaskView/TaskView";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTaskById, updateTask } from "../../store/slices/tasksSlice";
import { RootState } from "../../store/store";
import TaskEditForm from "../../components/templates/TaskEditForm/TaskEditForm";
import { useState } from "react";
import "./TaskDetailsPage.scss";
import EditIcon from "../../assets/icons/Edit.svg";
import { Task } from "../../types/common";
import NoDataView from "../../components/templates/NoDataView/NoDataView";
const TaskDetailsPage: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const dispatch = useDispatch();

  const task = useSelector((state: RootState) =>
    selectTaskById(state, taskId ?? "")
  );

  const [isEditMode, setIsEditMode] = useState(false);

  const onSaveTask = (task: Task) => {
    setIsEditMode(false);
    dispatch(updateTask(task));
  };
  const onCancelEdit = () => {
    setIsEditMode(false);
  };

  return (
    <MainLayout>
      <div className="task-details-page">
        <div className="page-header">
          <h2>Task Details</h2>
          {!isEditMode && (
            <img
              src={EditIcon}
              alt="Edit"
              className="edit-icon"
              onClick={() => setIsEditMode(true)}
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              title="Edit Task"
            />
          )}
        </div>
        {task && (
          <>
            {isEditMode ? (
              <TaskEditForm
                task={task}
                onCancel={onCancelEdit}
                onSave={onSaveTask}
              />
            ) : (
              <TaskView task={task} />
            )}
          </>
        )}
        {!task && <NoDataView message="Task not found" />}
      </div>
    </MainLayout>
  );
};

export default TaskDetailsPage;
