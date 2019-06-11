/*
 *
 * Task actions
 *
 */

import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import {
  TaskState,
  FetchTaskAction,
  TaskChangeAction,
  TaskActionTypes
} from '../Task/types';

import { IAppState } from '../../store/state';

export const fetchTasks: ActionCreator<
  ThunkAction<Promise<any>, TaskState, null, FetchTaskAction>
> = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const response = await axios.get('/api/tasks');

      dispatch({
        type: TaskActionTypes.FETCH_TASKS_REQUEST,
        payload: response.data
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const addTask: ActionCreator<
  ThunkAction<Promise<any>, {}, {}, AnyAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => IAppState
  ) => {
    try {
      const task = getState().task.taskFormData;

      const response = await axios.post('/api/task/add', task);
    } catch (err) {
      console.error(err);
    }
  };
};

export const taskChange = (name: string, value: string): TaskChangeAction => {
  let formData: any = {};
  formData[name] = value;

  return {
    type: TaskActionTypes.TASK_CHANGE,
    payload: formData
  };
};
