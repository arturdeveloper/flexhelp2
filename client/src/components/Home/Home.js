/*
Redux, Thunk way of doing things
*/

import React, { Component } from "react";
import AppNavbar from "../AppNavbar/AppNavbar";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";
import OfferList from "../OfferList/OfferList";

import { connect } from "react-redux";
import { itemsFetchData } from "../../actions/CatalogItems";
import { offersFetchData } from "../../actions/OfferItems";

class Home extends Component {
  componentDidMount() {
    this.props.fetchData("api/filters");
    this.props.offersFetchData("api/offers");
  }

  render() {
    const { offers } = this.props;

    console.log(offers);

    return (
      <div className="wrapper">
        <AppNavbar />
        <Container fluid>
          <Sidebar {...this.props} />
          <div id="main-panel" className="main-panel" ref="mainPanel">
            <Switch>
              <Route
                path="/offers"
                render={() => <OfferList offers={offers} />}
              />
            </Switch>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    offers: state.offers.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url)),
    offersFetchData: url => dispatch(offersFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
