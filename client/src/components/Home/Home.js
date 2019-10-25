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

import { withCookies } from "react-cookie";

class Home extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false,
    user: undefined
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
    this.props.fetchData("api/filters");
    this.props.offersFetchData("api/offers");

    const response = await fetch("/api/user", { credentials: "include" });
    const body = await response.text();

    if (body === "") {
      this.setState({ isAuthenticated: false });
    } else {
      this.setState({ isAuthenticated: true, user: JSON.parse(body) });
    }
  }

  render() {
    const { offers, filters } = this.props;
    const { user } = this.state;

    return (
      <div className="wrapper">
        <AppNavbar user={user} login={this.login} logout={this.logout} />
        <Container fluid>
          {/* <Sidebar {...this.props} /> */}
          <Sidebar filters={filters} />
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

export default withCookies(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
