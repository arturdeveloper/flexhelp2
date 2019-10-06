import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";


class App extends Component {
  state = {
    isLoading: true,
    users: []
  };

  async componentDidMount() {
    const response = await fetch('/api/users');
    const body = await response.json();
    this.setState({ users: body, isLoading: false });
  }

  render() {
    const {users, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Users List</h2>
            {users.map(user =>
              <div key={user.id}>
                {user.firstName}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;