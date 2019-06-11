/**
 *
 * TaskList
 *
 */

import * as React from 'react';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

import { ITask } from '../../containers/Task/types';

interface Props {
  tasks: ITask[];
}

const TaskList: React.FunctionComponent<Props> = props => {
  const { tasks } = props;

  const taskNodes = tasks.map(task => (
    <Card key={task._id}>
      <CardImg
        top
        width='100%'
        src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
        alt='Card image cap'
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  ));
  return <div className={'card-list'}>{taskNodes}</div>;
};

export default TaskList;
