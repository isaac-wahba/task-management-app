import { useState } from "react";
import "./TaskForm.scss";
import { Task } from "../../../types/types";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Title is required");
      return;
    }

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      details,
      status: "pending",
    };

    onSubmit(newTask);
    clearForm();
  };
  const clearForm = () => {
    setTitle("");
    setDetails("");
    setError("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="task-form">
        <Input value={title} onChange={setTitle} placeholder="Title" />
        <Input value={details} onChange={setDetails} placeholder="Details" />
        <Button onClick={() => {}}>Add Task</Button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default TaskForm;
