import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserEdit from "./components/UserEdit/UserEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/users" exact={true} component={UserList} />
          <Route path="/users/:id" component={UserEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
