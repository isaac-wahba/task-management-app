import { useParams } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";

const TaskDetailsView: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();

  return (
    <MainLayout>
      <h2>Task Details</h2>
      <p>Task ID: {taskId}</p>
      {/* Task details component goes here */}
    </MainLayout>
  );
};

export default TaskDetailsView;
