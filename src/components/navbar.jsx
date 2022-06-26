import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <h1>Habit Tracker</h1>
        <span>{this.props.totalCount}</span>
      </>
    );
  }
}

export default Navbar;
