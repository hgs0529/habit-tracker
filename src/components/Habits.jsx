import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Running", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit, i) => (
          <Habit habit={habit} key={habit.id} />
        ))}
      </ul>
    );
  }
}

export default Habits;
