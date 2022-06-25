import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all.js";

class Habit extends Component {
  handlePlus = () => {
    this.props.handlePlus(this.props.habit);
  };
  handleMinus = () => {
    this.props.handleMinus(this.props.habit);
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.habit);
  };

  render() {
    let { name, count } = this.props.habit;

    return (
      <div className="habit">
        <div>{name}</div>
        <div className="habit-count">{count}</div>
        <button className="habit-icon" onClick={this.handlePlus}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="habit-icon" onClick={this.handleMinus}>
          <i className="fas fa-minus-circle"></i>
        </button>
        <button className="habit-icon" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Habit;
