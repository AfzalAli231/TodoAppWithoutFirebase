import React, { Component } from 'react'

export default class Form extends Component {
  inputValue = {
    todo: "",
  };
  state = this.inputValue;

  handlerInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    this.props.onSubmit(this.state);
    e.preventDefault();
    this.setState(this.inputValue);
  };

  render() {
    const { todo } = this.state;

    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="todo"
            title="Add Work In Todo List"
            id="todo"
            onChange={this.handlerInput}
            value={todo}
            placeholder="Add Work"
            required
          />
          <button type="submit" title="Create Work To Do">Create</button>
        </form>
      </>
    );
  }
}
