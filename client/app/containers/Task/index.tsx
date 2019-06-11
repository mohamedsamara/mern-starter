/**
 *
 * Task
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAppState } from '../../store/state';

import { addTask, taskChange } from './actions';
import { ITaskData } from './types';

import AddTask from '../../components/AddTask';

interface OwnProps {}

interface DispatchProps {
  addTaskAction: () => void;
  taskChangeAction: (name: string, value: string) => any;
}

interface StateProps {
  taskFormData: ITaskData;
}

type Props = StateProps & OwnProps & DispatchProps;

export class Task extends React.PureComponent<Props> {
  componentDidMount() {}

  render(): JSX.Element {
    const { taskFormData, addTaskAction, taskChangeAction } = this.props;

    return (
      <AddTask
        taskFormData={taskFormData}
        taskChangeAction={(name: string, value: string) => {
          taskChangeAction(name, value);
        }}
        addTaskAction={addTaskAction}
      />
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    taskFormData: state.task.taskFormData
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    addTaskAction: () => {
      dispatch(addTask());
    },
    taskChangeAction: (name: string, value: string) => {
      dispatch(taskChange(name, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
