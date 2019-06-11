/*
 *
 * Task types
 *
 */

export interface ITask {
  _id: number;
  name: string;
}

export interface ITaskData {
  name: string;
  description: string;
}

export enum TaskActionTypes {
  FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST',
  TASK_CHANGE = 'TASK_CHANGE'
}

export interface TaskState {
  tasks: ITask[];
  taskFormData: ITaskData;
}

export interface FetchTaskAction {
  type: TaskActionTypes.FETCH_TASKS_REQUEST;
  payload: ITask[];
}

export interface TaskChangeAction {
  type: TaskActionTypes.TASK_CHANGE;
  payload: ITaskData;
}

export type TaskActions = FetchTaskAction | TaskChangeAction;
