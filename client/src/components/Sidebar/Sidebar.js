/*
=========================================================
// Adjust to your application

=========================================================
*/
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AppNavbar from "../AppNavbar/AppNavbar";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {

    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="logo">
          <a href="#" className="simple-text logo-mini">
            <div className="logo-img">
              {/* <img src={logo} alt="logo_image" /> */}
            </div>
          </a>
          <a href="#" className="simple-text logo-normal">
            FlexHelp
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {/* {this.state.width <= 991 ? <AppNavbar /> : null} */}
            {/* {this.props.routes.map((prop, key) => { */}
            {this.props.routes.map((prop, key) => {
                return (
                  <li
                    className={this.activeRoute(prop.layout + prop.path)}
                    key={key}
                  >
                    <NavLink
                      // to={prop.layout + prop.path}
                      // to={prop.path}
                      to={"users"}
                      className="nav-link"
                      activeClassName="active"
                    >
                      {/* <p>{prop.name}</p> */}
                      <p>{prop.catalogTitle}</p>
                    </NavLink>
                  </li>
                );
            })}
          </ul>

          <Form onSubmit={this.handleSubmit} className="SidebarForm">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={"Enter term here"}
                onChange={this.handleChange}
                autoComplete="firstName"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/users">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Sidebar;