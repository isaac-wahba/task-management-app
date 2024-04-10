import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TaskView from "../../components/templates/TaskView/TaskView";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTaskById } from "../../store/slices/tasksSlice";
import { RootState } from "../../store/store";

const TaskDetailsPage: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();

  const task = useSelector((state: RootState) =>
    selectTaskById(state, taskId ?? "")
  );

  return (
    <MainLayout>
      <TaskView task={task} />
    </MainLayout>
  );
};

export default TaskDetailsPage;
