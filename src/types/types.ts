export interface Task {
  id: string;
  title: string;
  details: string;
  status: "completed" | "pending";
}
