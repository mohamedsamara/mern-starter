/**
 *
 * index.tsx
 * This is the entry file for the application, only render App component.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import configureStore from './store/index';

import App from './app';

const history = createBrowserHistory({
  basename: '/'
});
const store = configureStore(history);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
