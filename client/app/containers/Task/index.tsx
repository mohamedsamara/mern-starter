/**
 *
 * Task
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

import { IAppState } from '../../store/state';
import { fetchTasks, addTask, deleteTask, taskChange } from './actions';
import { ITask, ITaskData, ITaskMessage } from './types';

import TaskList from '../../components/TaskList';
import AddTask from '../../components/AddTask';
import Message from '../../components/Message';

interface OwnProps {}

interface DispatchProps {
  fetchData: () => void;
  addTaskAction: () => void;
  deleteTaskAction: (id: number, index: number) => any;
  taskChangeAction: (name: string, value: string) => any;
}

interface StateProps {
  tasks: ITask[];
  taskFormData: ITaskData;
  message: ITaskMessage;
}

type Props = StateProps & OwnProps & DispatchProps;

export class Task extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  render(): JSX.Element {
    const {
      tasks,
      taskFormData,
      message,
      addTaskAction,
      deleteTaskAction,
      taskChangeAction
    } = this.props;

    return (
      <div className='task'>
        {message.isActive && <Message message={message} />}
        <div className='task-header'>
          <h2>Add Task</h2>
          <i className='fa fa-plus-circle fa-2x' id='toggler' />
        </div>
        <UncontrolledCollapse toggler='#toggler' className='task-toggle'>
          <Card>
            <CardBody>
              <AddTask
                taskFormData={taskFormData}
                taskChangeAction={(name: string, value: string) => {
                  taskChangeAction(name, value);
                }}
                addTaskAction={addTaskAction}
              />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <TaskList
          tasks={tasks}
          deleteTaskAction={(id: number, index: number) =>
            deleteTaskAction(id, index)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    tasks: state.task.tasks,
    message: state.task.message,
    taskFormData: state.task.taskFormData
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    fetchData: () => {
      dispatch(fetchTasks());
    },
    addTaskAction: () => {
      dispatch(addTask());
    },
    deleteTaskAction: (id: number, index: number) => {
      dispatch(deleteTask(id, index));
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
