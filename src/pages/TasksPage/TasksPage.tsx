import React from "react";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TaskList from "../../components/molecules/TaskList/TaskList";
import TaskForm from "../../components/organisms/TaskForm/TaskForm";
import { Task } from "../../types/types";
import useTaskFilter from "../../hooks/useTaskFilter";
import Filter from "../../components/organisms/Filter/Filter";
import "./TasksPage.scss"; // Import the SCSS file for TasksPage styling

const TasksPage: React.FC = () => {
  const { tasks, filter, setFilter } = useTaskFilter();

  const handleAddTask = (task: Task) => {
    console.log("Adding task:", task);
  };

  const handleToggleStatus = (id: string) => {
    console.log("Toggling status for task:", id);
  };

  return (
    <MainLayout>
      <div className="tasks-page">
        <div className="tasks-page-header">
          <h2>Tasks</h2>
          <Filter selectedFilter={filter} onSelectFilter={setFilter} />
        </div>
        <TaskForm onSubmit={handleAddTask} />
        <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} />
      </div>
    </MainLayout>
  );
};

export default TasksPage;
