/*
 *
 * Application reducer
 *
 */

import { Reducer } from 'redux';

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import {
  ApplicationState,
  ApplicationActionTypes,
  ApplicationActions
} from '../Application/types';

const initialState: ApplicationState = {
  isMenuOpen: false
};

const applicationReducer: Reducer<ApplicationState, ApplicationActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ApplicationActionTypes.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};

export default applicationReducer;
