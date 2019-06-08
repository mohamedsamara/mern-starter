/**
 *
 * Homepage
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAppState } from '../../store/state';

import { Task } from './types';
import { fetchTasks } from './actions';

interface OwnProps {}

interface DispatchProps {
  fetchData: () => void;
}

interface StateProps {
  repositories: Task[];
}

type Props = StateProps & OwnProps & DispatchProps;

export class Homepage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <div>Navigation</div>;
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    tasks: state.homepage.tasks
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    fetchData: () => {
      dispatch(fetchTasks());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
