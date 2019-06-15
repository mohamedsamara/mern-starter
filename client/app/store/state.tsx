/**
 *
 * state.tsx
 * application root state types configuration
 */

import { RouterState } from 'connected-react-router';

// import { HomepageState } from '../containers/Homepage/types';
import { ApplicationState } from '../containers/Application/types';
import { TaskState } from '../containers/Task/types';

export interface IAppState {
  router: RouterState;
  application: ApplicationState;
  task: TaskState;
}
