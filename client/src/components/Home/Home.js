/*
Redux, Thunk way of doing things
*/

import React, { Component } from "react";
import AppNavbar from "../AppNavbar/AppNavbar";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";

import { connect } from "react-redux";
import { itemsFetchData } from "../../actions/CatalogItems";

class Home extends Component {
  componentDidMount() {
    this.props.fetchData("api/filters");
  }

  render() {
    const { filters } = this.props;

    return (
      <div className="wrapper">
        <AppNavbar />
        <Container fluid>
          <Sidebar {...this.props} routes={filters} />
          <div id="main-panel" className="main-panel" ref="mainPanel">
            {/* <Switch>{this.getRoutes(routes)}</Switch> */}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.items,
    // filters: state.filters,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

// export default Home;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
