/**
 *
 * Homepage
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAppState } from '../../store/state';

import { ITask } from '../Task/types';
import { fetchTasks, addTask } from '../Task/actions';

import TaskList from '../../components/TaskList';

interface OwnProps {}

interface DispatchProps {
  fetchData: () => void;
}

interface StateProps {
  tasks: ITask[];
}

type Props = StateProps & OwnProps & DispatchProps;

export class Homepage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchData();
    // this.props.postData();
  }

  render(): JSX.Element {
    const { tasks } = this.props;

    return <TaskList tasks={tasks} />;
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    tasks: state.task.tasks
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
