import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Eating", count: 0, id: 2 },
      { name: "Watching", count: 0, id: 3 },
    ],
  };

  handlePlus = (habit) => {
    let copy_habits = [...this.state.habits];
    let index = copy_habits.indexOf(habit);
    copy_habits[index].count++;
    this.setState({ habits: copy_habits });
  };
  handleMinus = (habit) => {
    let copy_habits = [...this.state.habits];
    let index = copy_habits.indexOf(habit);
    let count = copy_habits[index].count;
    copy_habits[index].count = count > 0 ? count - 1 : 0;
    this.setState({ habits: copy_habits });
  };
  handleDelete = (habit) => {
    let copy_habits = [...this.state.habits];
    let index = copy_habits.indexOf(habit);
    copy_habits.splice(index, 1);

    this.setState({ habits: copy_habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => {
          return (
            <Habit
              habit={habit}
              key={habit.id}
              handlePlus={this.handlePlus}
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
