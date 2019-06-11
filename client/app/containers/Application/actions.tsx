/*
 *
 * Application actions
 *
 */

// Import from filesystem using root folder to solve the warning emitted from typescript "There are multiple modules with names that only differ in casing."
import { ApplicationActionTypes, ToggleMenuAction } from '../Application/types';

export const toggleMenu = (): ToggleMenuAction => {
  return {
    type: ApplicationActionTypes.TOGGLE_MENU
  };
};
