/**
 *
 * Header
 *
 */

import * as React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

interface Props {}

const Header: React.FunctionComponent<Props> = props => {
  return (
    <Navbar
      color='light'
      sticky={'top'}
      className='shadow-sm py-0 border-bottom'
      light
      expand='md'
    >
      <NavbarBrand tag={Link} to='/'>
        MERN Boilerplate
      </NavbarBrand>
      <Nav className='ml-auto' navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to='/login'>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/signup'>
              SignUp
            </NavLink>
          </NavItem>
        </Nav>
      </Nav>
    </Navbar>
  );
};

export default Header;
