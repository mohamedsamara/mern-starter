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

const Message: React.FunctionComponent<Props> = (props) => {
  const { message } = props;

  return (
    <div className='message-box'>
      {message.isActive && (
        <Alert color={message.type}>
          <p>{message.text}</p>
        </Alert>
      )}
    </div>
  );
};

export default Message;
