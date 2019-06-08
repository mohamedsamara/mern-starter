/*
 *
 * Homepage types
 *
 */

export interface Task {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export enum TaskActionTypes {
  FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST'
}

export interface TaskState {
  tasks: Task[];
}

export interface FetchTaskAction {
  type: TaskActionTypes.FETCH_TASKS_REQUEST;
  payload: Task[];
}

export type HomepageActions = FetchTaskAction;
