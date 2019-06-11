/*
 *
 * Homepage reducer
 *
 */

import { Reducer } from 'redux';

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import {
  HomepageState,
  HomepageActionTypes,
  HomepageActions
} from '../Homepage/types';

const initialState: HomepageState = {
  isLoading: false
};

const homepageReducer: Reducer<HomepageState, HomepageActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case HomepageActionTypes.HOMEPAGE_ACTION:
      return { ...state };
    default:
      return state;
  }
};

export default homepageReducer;
