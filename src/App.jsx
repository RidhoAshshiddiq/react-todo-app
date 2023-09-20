// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  addTodo = () => {
    if (this.state.newTodo !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: ''
      }));
    }
  }

  deleteTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Add a new task"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Add To Do</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;

