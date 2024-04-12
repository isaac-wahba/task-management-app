import { ReactNode } from "react";
import { TASK_STATUS } from "../enums/common";

export interface Task {
  id: string;
  title: string;
  details: string;
  status: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}

export interface Option {
  label: ReactNode;
  value: TASK_STATUS;
}

export interface EditStatusOption {
  label: ReactNode;
  value: TASK_STATUS.COMPLETED | TASK_STATUS.PENDING;
}
