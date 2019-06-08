/**
 *
 * Footer
 *
 */

import * as React from 'react';

import { Container } from 'reactstrap';

interface Props {}

const Footer: React.FunctionComponent<Props> = props => {
  return (
    <footer>
      <Container>
        <div className='copyright'>
          <span>MERN Boilerplate</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
