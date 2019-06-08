/*
 *
 * Homepage reducer
 *
 */

import { Reducer } from 'redux';

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import { TaskState, TaskActionTypes, HomepageActions } from '../HomePage/types';

const initialState: TaskState = {
  tasks: []
};

const homepageReducer: Reducer<TaskState, HomepageActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS_REQUEST:
      console.log('action.payload---------', action.payload);

      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
};

export default homepageReducer;
