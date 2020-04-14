/**
 *
 * app.tsx
 *
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';

import Application from './containers/Application';
import { IAppState } from './store/state';

// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';

// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// Import application sass styles
import './styles/sass/style.scss';

interface AppProps {
  store: Store<IAppState>;
  history: History;
}

const app = ({ store, history }: AppProps) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>
);

export default app;
