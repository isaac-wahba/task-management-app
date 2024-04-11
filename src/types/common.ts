import { TASK_STATUS } from "../enums/common";

export interface Task {
  id: string;
  title: string;
  details: string;
  status: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}
