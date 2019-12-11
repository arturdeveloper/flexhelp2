/*
=========================================================
// Adjust to your application
Uses Route props to display active element
=========================================================
*/
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import FilterForm from "./FilterForm";
import classNames from "classnames";

import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      dropdownOpen: false,
      filter: props.filters[0]
    };
  }

  activeRoute(routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  handleFilterSelect = event => {
    // console.log(event.target.value);
    this.props.filterOffers(event.target.value);
    this.setState({ filter: event.target.value });
  };

  style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  render() {
    const { dropdownOpen } = this.state;

    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="logo">
          <Link to="/offers" className="simple-text logo-mini">
            <div className="logo-img">
              {/* <img src={logo} alt="logo_image" /> */}
            </div>
          </Link>
          <Link to="/offers" className="simple-text logo-normal">
            FlexHelp
          </Link>
        </div>
        <div
          // className="sidebar-wrapper"
          className={classNames("pt-4", "sidebar-wrapper")}
        >
          {/* <ul className="nav">
            {this.props.filters.map((prop, key) => {
              return (
                <li
                  className={this.activeRoute(prop.layout + prop.path)}
                  key={key}
                >
                  <NavLink
                    to={"users"}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <p>{prop.catalogTitle}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul> */}

          <FilterForm
            currentSelection={this.state.filter}
            filters={this.props.filters}
            handleChange={this.handleFilterSelect}
          />

          {/* ------------------- */}
          <Form onSubmit={this.handleSubmit} className="SidebarForm">
            <FormGroup>
              <Label for="locationSearch">Search Location</Label>
              <Input
                type="text"
                name="locationSearch"
                id="locationSearch"
                defaultValue={"Enter location here"}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="budgetSearch">Price range</Label>
              <div className={classNames("container", "mt-0")}>
                <div className={classNames("row")}>
                  <Input
                    type="text"
                    name="budgetFrom"
                    id="budgetFrom"
                    defaultValue={"From"}
                    onChange={this.handleChange}
                    className={classNames("col-sm", "px-1")}
                  />
                  <Input
                    type="text"
                    name="budgetFrom"
                    id="budgetFrom"
                    defaultValue={"To"}
                    onChange={this.handleChange}
                    className={classNames("col-sm", "px-2")}
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <Button color="secondary" tag={Link} to="/users">
                Search
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Sidebar;
