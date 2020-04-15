/**
 *
 * Footer
 *
 */

import * as React from 'react';

import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {}

const Footer: React.FunctionComponent<Props> = (props) => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: 'contact' },
    { id: 1, name: 'Returns', to: 'return' },
    { id: 2, name: 'Shipping', to: 'shipping' },
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/signup'>SignUp</Link>
      </li>
      <li className='footer-link'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map((item) => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-copyright'>
          <span>
            <strong>© {new Date().getFullYear()} MERN Starter</strong>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
