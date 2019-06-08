/**
 *
 * state.tsx
 * application root state types configuration
 */

import { RouterState } from 'connected-react-router';

import { TaskState } from '../containers/Homepage/types';

export interface IAppState {
  router: RouterState;
  homepage: TaskState;
}
