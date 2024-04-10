import { useSelector } from "react-redux";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TaskList from "../../components/molecules/TaskList/TaskList";
import TaskForm from "../../components/organisms/TaskForm/TaskForm";
import { Task } from "../../types/types";
import { selectTasks } from "../../store/slices/tasksSlice";

const TasksPage: React.FC = () => {
  const tasks = useSelector(selectTasks);

  const handleAddTask = (task: Task) => {
    // Add task logic
    console.log("Adding task:", task);
  };

  const handleToggleStatus = (id: string) => {
    // Toggle task status logic
    console.log("Toggling status for task:", id);
  };

  return (
    <MainLayout>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} />
    </MainLayout>
  );
};

export default TasksPage;
