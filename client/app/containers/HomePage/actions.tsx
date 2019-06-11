/*
 *
 * Homepage actions
 *
 */

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import { HomepageActionTypes, HomepageAction } from '../Homepage/types';

export const homepageAction = (): HomepageAction => {
  return {
    type: HomepageActionTypes.HOMEPAGE_ACTION
  };
};
