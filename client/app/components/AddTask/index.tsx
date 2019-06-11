/**
 *
 * AddTask
 *
 */

import * as React from 'react';

import { Row, Col } from 'reactstrap';

import { ITaskData } from '../../containers/Task/types';

import Input from '../Input';

interface Props {
  taskFormData: ITaskData;
  taskChangeAction: (name: string, value: string) => any;
  addTaskAction: () => void;
}

const AddTask: React.FunctionComponent<Props> = props => {
  const { taskFormData, taskChangeAction, addTaskAction } = props;

  return (
    <Row>
      <Col xs='12' md='6'>
        <Col xs='12' md='12'>
          <Input
            type={'text'}
            label={'Task'}
            name={'name'}
            placeholder={'Please Enter Your Task Name'}
            value={taskFormData.name}
            onInputChange={(name: string, value: string) => {
              taskChangeAction(name, value);
            }}
          />
        </Col>
        <Col xs='12' md='12'>
          <Input
            type={'text'}
            label={'Description'}
            name={'description'}
            placeholder={'Please Enter Your Description'}
            value={taskFormData.description}
            onInputChange={(name: string, value: string) => {
              taskChangeAction(name, value);
            }}
          />
        </Col>
        <Col xs='12' md='12'>
          <hr />
          <Row className='task-actions'>
            <Col xs='6' md='6'>
              <button
                className='input-btn'
                type='submit'
                onClick={() => addTaskAction()}
              >
                Add Task
              </button>
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default AddTask;
