/*
 *
 * reducers.tsx
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { IAppState } from './state';

// import reducers
import applicationReducer from '../containers/Application/reducer';
import taskReducer from '../containers/Task/reducer';

const rootReducer = (history: History) =>
  combineReducers<IAppState>({
    router: connectRouter(history),
    application: applicationReducer,
    task: taskReducer
  });

export default rootReducer;
