/**
 *
 * AddTask
 *
 */

import * as React from 'react';

import { Container, Row, Col, FormGroup } from 'reactstrap';

import { ITaskData } from '../../containers/Task/types';

import Input from '../Input';

interface Props {
  taskFormData: ITaskData;
  taskChangeAction: (name: string, value: string) => any;
  addTaskAction: () => void;
}

const AddTask: React.FunctionComponent<Props> = (props) => {
  const { taskFormData, taskChangeAction, addTaskAction } = props;

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6">
          <FormGroup>
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
          </FormGroup>
        </Col>
        <Col xs="12" sm="6">
          <FormGroup>
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
          </FormGroup>
        </Col>
        <hr />
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <button
            className="input-btn"
            type="submit"
            onClick={() => addTaskAction()}
          >
            Add Task
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTask;
