/*
 *
 * Homepage types
 *
 */

export enum HomepageActionTypes {
  HOMEPAGE_ACTION = 'HOMEPAGE_ACTION'
}

export interface HomepageState {}

export interface HomepageAction {
  type: HomepageActionTypes.HOMEPAGE_ACTION;
}

export type HomepageActions = HomepageAction;
