import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

import "./AppNavbar.css";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { user } = this.props;
    console.log(user);

    const navcontent = user ? (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>You are logged in as: {user.given_name}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={this.props.logout}>
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    ) : (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#">Sign Up as Provider</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Sign Up as Customer</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={this.props.login}>
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <Navbar className="AppNavBar" color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          Find Collaborators
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {navcontent}
        </Collapse>
      </Navbar>
    );
  }
}

// export default withCookies(AppNavbar);
export default AppNavbar;
