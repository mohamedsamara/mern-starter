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
import homepageReducer from '../containers/Homepage/reducer';

const rootReducer = (history: History) =>
  combineReducers<IAppState>({
    router: connectRouter(history),
    homepage: homepageReducer
  });

export default rootReducer;
