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
  AddTaskAction,
  DeleteTaskAction,
  TaskChangeAction,
  TaskFieldsResetAction,
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
  ThunkAction<Promise<any>, {}, TaskFieldsResetAction, AddTaskAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => IAppState
  ) => {
    try {
      const task = getState().task.taskFormData;

      if ((task.name || task.description) == '') {
        const error: any = {};
        error.isActive = true;
        error.text = 'the fields name and description are required';
        error.type = 'danger';

        dispatch({
          type: TaskActionTypes.TASK_MESSAGE,
          payload: error
        });
      } else {
        const response = await axios.post('/api/task/add', task);

        const success: any = {};
        success.isActive = true;
        success.text = 'new task was added';
        success.type = 'success';

        dispatch({
          type: TaskActionTypes.ADD_TASK_REQUEST,
          payload: response.data
        });

        dispatch({
          type: TaskActionTypes.TASK_MESSAGE,
          payload: success
        });
      }

      setTimeout(() => {
        dispatch({ type: TaskActionTypes.RESET_TASK_FIELDS });
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteTask: ActionCreator<
  ThunkAction<Promise<any>, {}, {}, DeleteTaskAction>
> = (id: number, index: number) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => IAppState
  ) => {
    try {
      const response = await axios.delete('/api/task/delete/' + id);

      const success: any = {};
      success.isActive = true;
      success.text = 'task was deleted';
      success.type = 'success';

      dispatch({
        type: TaskActionTypes.TASK_MESSAGE,
        payload: success
      });

      dispatch({
        type: TaskActionTypes.DELETE_TASK_REQUEST,
        payload: index
      });

      setTimeout(() => {
        dispatch({ type: TaskActionTypes.RESET_TASK_FIELDS });
      }, 3000);
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
