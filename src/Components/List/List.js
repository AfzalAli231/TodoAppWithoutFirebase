import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'

export default class List extends Component {
  render() {
    const { todo, onDelete, onEdit } = this.props;
    return (
      <>
        <ul>
          {todo.map((item, index) => {
            return (
              <ListItem
                item={item.todo}
                key={index}
                id={index}
                handleEdit={onEdit}
                handleDelete={() => {
                  onDelete(index);
                }}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
