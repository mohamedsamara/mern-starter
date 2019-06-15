/**
 *
 * store.tsx
 * store configuration
 */

import { Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import rootReducer from './reducers';
import { IAppState } from './state';

declare const module: any;
declare const window: any;

export default function configureStore(
  history: History
): Store<IAppState, any> {
  const middlewares = [thunk, routerMiddleware(history)];
  const enhancers = applyMiddleware(...middlewares);

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(rootReducer(history), composeEnhancers(enhancers));

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
