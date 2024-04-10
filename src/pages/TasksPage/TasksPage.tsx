import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TaskList from "../../components/molecules/TaskList/TaskList";
import TaskForm from "../../components/organisms/TaskForm/TaskForm";
import useTaskFilter from "../../hooks/useTaskFilter";
import Filter from "../../components/organisms/Filter/Filter";
import "./TasksPage.scss";

import { useTaskActions } from "../../hooks/useTaskActions";

const TasksPage: React.FC = () => {
  const { tasks, filter, setFilter } = useTaskFilter();

  const { handleAddTask, handleDeleteTask, handleToggleStatus } =
    useTaskActions();

  return (
    <MainLayout>
      <div className="tasks-page">
        <div className="tasks-page-header">
          <h2>Tasks</h2>
          <Filter selectedFilter={filter} onSelectFilter={setFilter} />
        </div>
        <TaskForm onSubmit={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleStatus={handleToggleStatus}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </MainLayout>
  );
};

export default TasksPage;
