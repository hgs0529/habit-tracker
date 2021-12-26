import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (e) => {};
  handleDecrement = (e) => {};
  handleDelete = (e) => {};
  render() {
    return (
      <>
        <span className="habit-name">{this.props.habit.name}</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          onClick={this.handleIncrement}
          className="habit-button habit-increase"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          onClick={this.handleDecrement}
          className="habit-button habit-decrease"
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </>
    );
  }
}

export default Habit;
