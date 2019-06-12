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
  },
  message: {
    isActive: false,
    text: '',
    type: ''
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
    case TaskActionTypes.ADD_TASK_REQUEST:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TaskActionTypes.DELETE_TASK_REQUEST:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload),
          ...state.tasks.slice(action.payload + 1)
        ]
      };
    case TaskActionTypes.TASK_CHANGE:
      return {
        ...state,
        taskFormData: { ...state.taskFormData, ...action.payload }
      };
    case TaskActionTypes.TASK_MESSAGE:
      return {
        ...state,
        message: { ...state.message, ...action.payload }
      };
    case TaskActionTypes.RESET_TASK_FIELDS:
      return {
        ...state,
        taskFormData: {
          name: '',
          description: ''
        },
        message: {
          isActive: false,
          text: '',
          type: ''
        }
      };
    default:
      return state;
  }
};

export default taskReducer;
