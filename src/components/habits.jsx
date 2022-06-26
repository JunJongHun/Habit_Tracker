import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  // handlePlus = (habit) => {
  //   this.props.handlePlus(habit);
  // };
  handleMinus = (habit) => {
    this.props.handleMinus(habit);
  };
  handleDelete = (habit) => {
    this.props.handleDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              handlePlus={this.props.handlePlus}
              handleMinus={this.handleMinus}
              handleDelete={this.handleDelete}
            ></Habit>
          );
        })}
      </ul>
    );
  }
}

export default Habits;
