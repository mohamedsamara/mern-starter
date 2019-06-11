/*
 *
 * Application types
 *
 */

export enum ApplicationActionTypes {
  TOGGLE_MENU = 'TOGGLE_MENU'
}

export interface ApplicationState {
  isMenuOpen: boolean;
}

export interface ToggleMenuAction {
  type: ApplicationActionTypes.TOGGLE_MENU;
}

export type ApplicationActions = ToggleMenuAction;
