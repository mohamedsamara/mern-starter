/**
 *
 * Header
 *
 */

import * as React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

interface Props {
  isMenuOpen: boolean;
  toggleMenuAction: () => void;
}

const Header: React.FunctionComponent<Props> = props => {
  const { isMenuOpen, toggleMenuAction } = props;

  return (
    <Navbar
      color="light"
      sticky={'top'}
      className="shadow-sm border-bottom nav-menu"
      light
      expand="md"
    >
      <NavbarBrand tag={Link} to="/">
        MERN Starter
      </NavbarBrand>
      <NavbarToggler onClick={toggleMenuAction} />
      <Collapse isOpen={isMenuOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/task">
                Task
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/">
                Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
