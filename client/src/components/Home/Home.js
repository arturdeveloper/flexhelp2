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
import { filterOffers } from "../../actions/FilteredOffers";

import { withCookies } from "react-cookie";

class Home extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false,
    user: undefined,
    isOpen: true
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state.csrfToken = cookies.get("XSRF-TOKEN");
  }

  login = () => {
    console.log("from navbar");

    let port = window.location.port ? ":" + window.location.port : "";
    if (port === ":3000") {
      port = ":8080";
    }
    window.location.href = "//" + window.location.hostname + port + "/private";
  };

  logout = () => {
    fetch("/api/logout", {
      method: "POST",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": this.state.csrfToken }
    })
      .then(res => res.json())
      .then(response => {
        window.location.href =
          response.logoutUrl +
          "?id_token_hint=" +
          response.idToken +
          "&post_logout_redirect_uri=" +
          window.location.origin;
      });
  };

  async componentDidMount() {
    this.props.fetchCategories("api/filters");
    this.props.offersFetchData("api/offers");

    const response = await fetch("/api/user", { credentials: "include" });
    const body = await response.text();

    if (body === "") {
      this.setState({ isAuthenticated: false });
    } else {
      this.setState({ isAuthenticated: true, user: JSON.parse(body) });
    }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  callFilter = filterArg => {
    console.log(filterArg);
    this.props.filterOffers(this.props.offers, filterArg);
    // this.props.filterOffers(filterArg);
    this.props.history.push(`/offers/${filterArg}`);
  };

  render() {
    const { offers, filters, filteredOffers } = this.props;
    const { user, isOpen } = this.state;

    console.log(filteredOffers);

    return (
      <div className="wrapper">
        <AppNavbar user={user} login={this.login} logout={this.logout} />
        <Container fluid>
          {/* <Sidebar {...this.props} /> */}
          {/* <Sidebar filters={filters} /> */}
          <Sidebar
            filters={filters}
            toggle={this.toggle}
            isOpen={isOpen}
            filterOffers={this.callFilter}

            // TODO: pass the method to FilterForm??
          />
          <div id="main-panel" className="main-panel" ref="mainPanel">
            <Switch>
              {/* <Route
                path="/faq"
                render={() => <Sidebar filters={filters} />}
              /> */}
              <Route
                exact
                path="/offers"
                render={() => <OfferList offers={offers} />}
              />
              <Route
                path="/offers/:id"
                // path="/offers/:id?"  // is this better, then remove "exact" above
                render={() => <OfferList offers={filteredOffers} />}
                // render={() => <h2>hello there</h2>}
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
    offers: state.offers.items,
    filteredOffers: state.filteredOffers.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: url => dispatch(itemsFetchData(url)),
    offersFetchData: url => dispatch(offersFetchData(url)),
    filterOffers: (offers, criteria) => dispatch(filterOffers(offers, criteria))
  };
};

export default withCookies(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
