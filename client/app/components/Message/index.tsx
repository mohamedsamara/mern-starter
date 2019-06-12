/**
 *
 * Message
 *
 */

import * as React from 'react';

import { Alert } from 'reactstrap';

import { ITaskMessage } from '../../containers/Task/types';

interface Props {
  message: ITaskMessage;
}

const Message: React.FunctionComponent<Props> = props => {
  const { message } = props;

  return (
    <div className='message-box'>
      <Alert color={message.type}>
        <p>{message.text}</p>
      </Alert>
      <hr />
    </div>
  );
};

export default Message;
