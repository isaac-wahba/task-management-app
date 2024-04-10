import { TASK_STATUS, TASK_STATUS_LABEL } from "../enums/common";

export const filterOptions = [
  {
    value: TASK_STATUS.ALL,
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: "black", marginRight: "5px" }}
        ></div>
        <span>{TASK_STATUS_LABEL.ALL}</span>
      </div>
    ),
  },
  {
    value: TASK_STATUS.PENDING,
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: "orange", marginRight: "5px" }}
        ></div>
        <span>{TASK_STATUS_LABEL.PENDING}</span>
      </div>
    ),
  },
  {
    value: TASK_STATUS.COMPLETED,
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: "green", marginRight: "5px" }}
        ></div>
        <span>{TASK_STATUS_LABEL.COMPLETED}</span>
      </div>
    ),
  },
];
