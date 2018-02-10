import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const TopNav = () => {

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">StoryPop</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/create">
            Create
          </NavItem>
          <NavItem eventKey={2} href="/explore">
            Explore
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}

export default TopNav;
