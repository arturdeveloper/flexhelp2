import React, { Component } from "react";
import { CookiesProvider } from "react-cookie";
import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserEdit from "./components/UserEdit/UserEdit";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <Router>
            <Switch>
              {/* <Route path="/" exact={true} component={Home} /> */}
              <Route path="/" render={props => <Home {...props} />} />
              {/* <Route path="/main" render={props => <Home {...props} />} /> */}
              {/* <Redirect from="/" to="/main/dashboard" /> */}
              {/* <Route path="/users" exact={true} component={UserList} /> */}
              <Route path="/users/:id" component={UserEdit} />
            </Switch>
          </Router>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;
