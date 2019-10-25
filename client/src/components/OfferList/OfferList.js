import React, { Component } from "react";
import Card from "../Card/Card";

class OfferList extends Component {
  render() {
    const { offers } = this.props;

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

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
    };

    return <div style={style}>{offerList}</div>;
  }
}

export default OfferList;
