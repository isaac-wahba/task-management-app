import { COLORS } from "../assets/styles/colors";
import { TASK_STATUS, TASK_STATUS_LABEL } from "../enums/common";
import { Task } from "../types/common";

export const filterOptions = [
  {
    value: TASK_STATUS.ALL,
    label: (
      <div className="option-content">
        <div
          className="color-circle"
          style={{ backgroundColor: COLORS.SECONDARY, marginRight: "5px" }}
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
          style={{ backgroundColor: COLORS.WARNING, marginRight: "5px" }}
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
          style={{ backgroundColor: COLORS.SUCCESS, marginRight: "5px" }}
        ></div>
        <span>{TASK_STATUS_LABEL.COMPLETED}</span>
      </div>
    ),
  },
];

export const initialTasksList: Task[] = [
  {
    id: "1",
    title: "Set up project repository",
    status: TASK_STATUS.PENDING,
    details:
      "Create a new GitHub repository for the project, initialize it with necessary files, and set up version control.",
  },
  {
    id: "2",
    title: "Design user interface mockups",
    status: TASK_STATUS.COMPLETED,
    details:
      "Create mockups and wireframes for the user interface using tools like Figma or Sketch, considering user experience principles and design best practices.",
  },
  {
    id: "3",
    title: "Implement responsive layout",
    status: TASK_STATUS.PENDING,
    details:
      "Develop responsive layout and design using HTML and CSS frameworks like Bootstrap or Tailwind CSS, ensuring compatibility across different devices and screen sizes.",
  },
  {
    id: "4",
    title: "Integrate API endpoints",
    status: TASK_STATUS.PENDING,
    details:
      "Integrate with backend API endpoints to fetch and display data dynamically using technologies like Axios or Fetch API, ensuring proper error handling and data validation.",
  },
  {
    id: "5",
    title: "Implement authentication",
    status: TASK_STATUS.COMPLETED,
    details:
      "Implement user authentication and authorization features using OAuth 2.0 or JWT (JSON Web Tokens), providing secure access to protected routes and resources.",
  },
  {
    id: "6",
    title: "Optimize performance",
    status: TASK_STATUS.PENDING,
    details:
      "Optimize website performance by minimizing resource load times, leveraging browser caching, and implementing lazy loading techniques for images and assets.",
  },
  {
    id: "7",
    title: "Write unit tests",
    status: TASK_STATUS.COMPLETED,
    details:
      "Write unit tests using testing frameworks like Jest or Mocha, covering critical components and functionality to ensure code reliability and maintainability.",
  },
];
