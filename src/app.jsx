import "./app.css";
import Habits from "./components/habits";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import AddFrom from "./components/addFrom";

class App extends Component {
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

  handleSubmit = (name) => {
    let copy_habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: copy_habits });
  };

  onReset = () => {
    let habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits: habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((value) => value.count > 0).length
          }
        ></Navbar>
        <AddFrom handleSubmit={this.handleSubmit}></AddFrom>
        <Habits
          habits={this.state.habits}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
          handleDelete={this.handleDelete}
        ></Habits>
        <button onClick={this.onReset}>all reset</button>
      </>
    );
  }
}

export default App;
