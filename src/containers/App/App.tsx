import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import TaskDetailsPage from "../../pages/TaskDetailsPage/TaskDetailsPage";
import TasksPage from "../../pages/TasksPage/TasksPage";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/tasks/:taskId" element={<TaskDetailsPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
