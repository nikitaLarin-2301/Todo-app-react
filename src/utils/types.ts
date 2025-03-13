import { TASK_STATUSES } from "./consts.ts";

export interface ITask {
  id: string;
  text: string;
  status: typeof TASK_STATUSES[keyof typeof TASK_STATUSES];
}