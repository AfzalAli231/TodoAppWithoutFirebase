import React, { Component } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './App.css';

export default class App extends Component {
  state = {
    data: [],
  };

  handleSubmit = (newVal) => {
    this.setState({ data: [...this.state.data, newVal] });
  };
  handleRemove = (index) => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item, i) => {
        return i !== index;
      }),
    });
  };
  handleOnEdit = (editVal, index) => {
    const { data } = this.state;
    data.forEach((item, i) => {
      if (i === index) {
        item.todo = editVal;
      }
    })
    this.setState({data:data})
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <Form onSubmit={this.handleSubmit} />
        <h1 title="Todo List">Todo List</h1>
        <List todo={data} onEdit={this.handleOnEdit} onDelete={this.handleRemove} />
      </div>
    );
  }
}
