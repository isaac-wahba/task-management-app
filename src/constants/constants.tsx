export const filterOptions = [
  {
    value: "all",
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: "black", marginRight: "5px" }}
        ></div>
        <span>All</span>
      </div>
    ),
  },
  {
    value: "completed",
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: "green", marginRight: "5px" }}
        ></div>
        <span>Completed</span>
      </div>
    ),
  },
  {
    value: "pending",
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: "orange", marginRight: "5px" }}
        ></div>
        <span>Pending</span>
      </div>
    ),
  },
];
