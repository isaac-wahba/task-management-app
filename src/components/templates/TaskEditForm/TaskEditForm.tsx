import React, { useState } from "react";
import { EditStatusOption, Option, Task } from "../../../types/common";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { COLORS } from "../../../assets/styles/colors";
import "./TaskEditForm.scss";
import TextArea from "../../atoms/TextArea/TextArea";
import { TASK_STATUS } from "../../../enums/common";
import DropDown, { DropDownOption } from "../../atoms/DropDown/DropDown";
import { editStatusOptions } from "../../../constants/constants";

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
  const [selectedStatus, setSelectedStatus] = useState<DropDownOption>(
    editStatusOptions.find(
      (option: Option) => option.value === task.status
    ) as EditStatusOption
  );
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
        <label htmlFor="details">Status</label>
        <DropDown
          options={editStatusOptions}
          selectedOption={selectedStatus}
          onSelect={(option: DropDownOption) => {
            setSelectedStatus(option);
            setEditedTask({
              ...editedTask,
              status: option.value as
                | TASK_STATUS.PENDING
                | TASK_STATUS.COMPLETED,
            });
          }}
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
