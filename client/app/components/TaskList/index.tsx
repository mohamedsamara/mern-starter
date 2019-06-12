/**
 *
 * TaskList
 *
 */

import * as React from 'react';

import { Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

import { ITask } from '../../containers/Task/types';

interface Props {
  tasks: ITask[];
  deleteTaskAction: (id: number, index: number) => any;
}

const TaskList: React.FunctionComponent<Props> = props => {
  const { tasks, deleteTaskAction } = props;

  const taskNodes = tasks.map((task, index) => (
    <Col xs='12' sm='6' lg='4' key={task._id}>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>{task.name}</h2>
          </CardTitle>
          <CardText>{task.description}</CardText>
          <button
            className='input-btn'
            type='submit'
            onClick={() => deleteTaskAction(task._id, index)}
          >
            delete Task
          </button>
        </CardBody>
      </Card>
    </Col>
  ));
  return (
    <div className={'card-list'}>
      <Row>
        {tasks.length > 0 ? (
          taskNodes
        ) : (
          <Col>
            <p className='no-data'>You have no tasks created yet!</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default TaskList;
