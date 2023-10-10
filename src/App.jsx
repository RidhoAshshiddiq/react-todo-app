// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React, { Component } from 'react';

// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       newTodo: ''
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ newTodo: event.target.value });
//   }

//   addTodo = () => {
//     if (this.state.newTodo !== '') {
//       this.setState((prevState) => ({
//         todos: [...prevState.todos, this.state.newTodo],
//         newTodo: ''
//       }));
//     }
//   }

//   deleteTodo = (index) => {
//     const newTodos = [...this.state.todos];
//     newTodos.splice(index, 1);
//     this.setState({ todos: newTodos });
//   }

//   render() {
//     return (
//       <div>
//         <h1>To-Do List</h1>
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={this.state.newTodo}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.addTodo}>Add To Do</button>
//         <ul>
//           {this.state.todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button onClick={() => this.deleteTodo(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoApp;

import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((task) => !task.completed);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Tambahkan Tugas Anda"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Tambahkan Tugas</button>
      </div>
      <ul>
        {todos.map((task, index) => (
          <li key={index} className={task.completed ? 'selesai' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTodo(index)}>Hapus</button>
          </li>
        ))}
      </ul>
      {todos.some(task => task.completed) && (
        <button onClick={clearCompleted}>Hapus yang Sudah Selesai</button>
      )}
    </div>
  );
}

export default TodoApp;
