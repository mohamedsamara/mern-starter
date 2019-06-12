/*
 *
 * Task types
 *
 */

export interface ITask {
  _id: number;
  name: string;
  description: string;
}

export interface ITaskData {
  name: string;
  description: string;
}

export interface ITaskMessage {
  isActive: boolean;
  text: string;
  type: string;
}

export enum TaskActionTypes {
  FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST',
  ADD_TASK_REQUEST = 'ADD_TASK_REQUEST',
  DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST',
  TASK_CHANGE = 'TASK_CHANGE',
  TASK_MESSAGE = 'TASK_MESSAGE',
  RESET_TASK_FIELDS = 'RESET_TASK_FIELDS'
}

export interface TaskState {
  tasks: ITask[];
  taskFormData: ITaskData;
  message: ITaskMessage;
}

export interface FetchTaskAction {
  type: TaskActionTypes.FETCH_TASKS_REQUEST;
  payload: ITask[];
}

export interface AddTaskAction {
  type: TaskActionTypes.ADD_TASK_REQUEST;
  payload: ITask;
}

export interface DeleteTaskAction {
  type: TaskActionTypes.DELETE_TASK_REQUEST;
  payload: number;
}

export interface TaskChangeAction {
  type: TaskActionTypes.TASK_CHANGE;
  payload: ITaskData;
}

export interface TaskMessageAction {
  type: TaskActionTypes.TASK_MESSAGE;
  payload: ITaskMessage;
}

export interface TaskFieldsResetAction {
  type: TaskActionTypes.RESET_TASK_FIELDS;
}

export type TaskActions =
  | FetchTaskAction
  | AddTaskAction
  | DeleteTaskAction
  | TaskChangeAction
  | TaskMessageAction
  | TaskFieldsResetAction;
