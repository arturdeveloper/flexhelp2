import React, { Component } from "react";

const style = {
  width: "90%"
};

class FilterForm extends Component {
  render() {
    return (
      <select
        style={style}
        value={this.props.currentSelection}
        onChange={this.props.handleChange}
      >
        {this.props.filters.map((prop, key) => {
          return (
            <option key={key} value={prop.catalogId}>
              {prop.catalogTitle}
            </option>
          );
        })}
      </select>
    );
  }
}

export default FilterForm;
