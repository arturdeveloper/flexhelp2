import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table, Col, Row } from "reactstrap";
import Card from "../Card/Card";
import AppNavbar from "../AppNavbar/AppNavbar";
import { Link } from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], isLoading: true };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  async remove(id) {
    await fetch(`/api/user/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      let updatedUsers = [...this.state.users].filter(i => i.id !== id);
      this.setState({ users: updatedUsers });
    });
  }

  render() {
    const { users, isLoading } = this.state;
    const { offers } = this.props;

    // console.log(offers);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    // const userList = users.map(user => {
    //   const address = `${user.address || ''} ${user.city || ''} ${user.stateOrProvince || ''}`;
    //   return <tr key={user.id}>
    //     <td style={{whiteSpace: 'nowrap'}}>{user.firstName}</td>
    //     <td>{user.lastName}</td>
    //     {/* <td>{group.events.map(event => {
    //       return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
    //         year: 'numeric',
    //         month: 'long',
    //         day: '2-digit'
    //       }).format(new Date(event.date))}: {event.title}</div>
    //     })}</td> */}
    //     <td>
    //       <ButtonGroup>
    //         <Button size="sm" color="primary" tag={Link} to={"/users/" + user.id}>Edit</Button>
    //         <Button size="sm" color="danger" onClick={() => this.remove(user.id)}>Delete</Button>
    //       </ButtonGroup>
    //     </td>
    //   </tr>
    // });

    const offerList = offers.map((offer, key) => {
      return (
        <Card
          key={key}
          hCenter={true}
          title={"Offer ID " + offer.offerId}
          content={offer.catalog.catalogDescription}
          category={offer.catalog.catalogTitle}
          legend={"Location: " + offer.location}
          stats={"Price: " + offer.price}
        />
      );
    });

    const style = {
      display: "flex",
      flexDirection: "row",
      flexFlow: "row wrap",
      justifyContent: "space-around"
      // justifyContent: "center"
    };

    return (
      <div style={style}>
        {/* <Container fluid> */}
        {/* <Row> */}
        {/* <Card
              hCenter={true}
              // title="Card title"
              content="Card content"
              category="Card Category"
              legend="some legend"
              stats="5"
            /> */}
        {offerList}
        {/* </Row> */}
        {/* </Container> */}
      </div>
    );
  }
}

export default UserList;
