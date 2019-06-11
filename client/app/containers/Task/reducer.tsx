/*
 *
 * Task reducer
 *
 */

import { Reducer } from 'redux';

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import { TaskState, TaskActionTypes, TaskActions } from '../Task/types';

const initialState: TaskState = {
  tasks: [],
  taskFormData: {
    name: '',
    description: ''
  }
};

const taskReducer: Reducer<TaskState, TaskActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS_REQUEST:
      return {
        ...state,
        tasks: action.payload
      };

    case TaskActionTypes.TASK_CHANGE:
      return {
        ...state,
        taskFormData: { ...state.taskFormData, ...action.payload }
      };
    default:
      return state;
  }
};

export default taskReducer;
