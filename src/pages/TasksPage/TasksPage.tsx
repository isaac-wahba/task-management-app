import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TaskList from "../../components/organisms/TaskList/TaskList";
import TaskForm from "../../components/organisms/TaskForm/TaskForm";
import useTaskFilter from "../../hooks/useTaskFilter";
import Filter from "../../components/organisms/Filter/Filter";
import "./TasksPage.scss";

import { useTaskActions } from "../../hooks/useTaskActions";
import { TASK_STATUS } from "../../enums/common";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import NoDataView from "../../components/templates/NoDataView/NoDataView";
import { filterOptions } from "../../constants/constants";

const TasksPage: React.FC = () => {
  const { tasks, filter, setFilter, loading } = useTaskFilter();

  const { handleAddTask, handleDeleteTask, handleToggleStatus } =
    useTaskActions();

  return (
    <MainLayout>
      <div className="tasks-page">
        <div className="tasks-page-header">
          <h2>Tasks</h2>
          <Filter
            selectedFilter={filter}
            onSelectFilter={setFilter}
            filterOptions={filterOptions}
          />
        </div>
        <TaskForm onSubmit={handleAddTask} />
        {tasks && tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            onToggleStatus={handleToggleStatus}
            onDeleteTask={handleDeleteTask}
          />
        ) : (
          <NoDataView
            message={
              loading
                ? "Loading..."
                : `No ${
                    filter !== TASK_STATUS.ALL
                      ? capitalizeFirstLetter(filter)
                      : ""
                  } tasks to display`
            }
          />
        )}
      </div>
    </MainLayout>
  );
};

export default TasksPage;
