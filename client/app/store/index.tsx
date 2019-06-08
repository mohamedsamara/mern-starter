/**
 *
 * store.tsx
 * store configuration
 */

import { Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

import rootReducer from './reducers';
import { IAppState } from './state';

declare const module: any;

export default function configureStore(
  history: History
): Store<IAppState, any> {
  const middlewares = [thunk, routerMiddleware(history)];
  const enhancers = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer(history),
    composeWithDevTools(enhancers)
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
