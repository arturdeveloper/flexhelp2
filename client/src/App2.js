import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div
        className="navbar navbar-expand-lg navbar-light bg-dark"
        id="navbarResponsive"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" to="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/profile">
              {" "}
              Profile{" "}
            </a>
          </li>
          <li className="nav-item">
            {/*<Link className="nav-link" onClick={this.props.auth.logout}>Logout</Link>*/}
            <a className="nav-link" href="javascript:void(0)">
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
//        <img src={logo} className="App-logo" alt="logo" />
