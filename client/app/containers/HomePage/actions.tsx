/*
 *
 * Homepage actions
 *
 */

import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import { TaskState, FetchTaskAction, TaskActionTypes } from '../HomePage/types';

export const fetchTasks: ActionCreator<
  ThunkAction<Promise<any>, TaskState, null, FetchTaskAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/mohamedsamara/repos'
      );

      console.log('response---', response);

      dispatch({
        type: TaskActionTypes.FETCH_TASKS_REQUEST,
        payload: response.data
      });
    } catch (err) {
      console.error(err);
    }
  };
};
