import React, { useState } from "react";
import { Task } from "../../../types/common";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { COLORS } from "../../../assets/styles/colors";
import "./TaskEditForm.scss";
import TextArea from "../../atoms/TextArea/TextArea";

interface TaskEditFormProps {
  task: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({
  task,
  onCancel,
  onSave,
}) => {
  const [editedTask, setEditedTask] = useState<Task>(task);

  return (
    <div className="task-edit-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <Input
          value={editedTask.title}
          onChange={(value: string) =>
            setEditedTask({
              ...editedTask,
              title: value,
            })
          }
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="details">Details</label>
        <TextArea
          value={editedTask.details}
          onChange={(value: string) =>
            setEditedTask({
              ...editedTask,
              details: value,
            })
          }
          placeholder="Details"
        />
      </div>
      <div className="button-group">
        <Button
          onClick={() => {
            onSave(editedTask);
          }}
          primaryColor={COLORS.PRIMARY}
          hoverColor={COLORS.PRIMARY_DARKER}
        >
          Save
        </Button>
        <Button
          onClick={onCancel}
          primaryColor={COLORS.LIGHT_GRAY}
          hoverColor={COLORS.MID_GRAY}
          additionalStyles={{ color: COLORS.DARK }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TaskEditForm;
