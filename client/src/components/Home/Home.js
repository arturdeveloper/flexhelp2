import React, { Component } from 'react';
import './Home.css';
import AppNavbar from "../AppNavbar/AppNavbar"
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/users">Manage Users</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;