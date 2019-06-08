/**
 *
 * actions.tsx
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as homepage from '../containers/Homepage/actions';

export default function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...homepage
    },
    dispatch
  );
}
