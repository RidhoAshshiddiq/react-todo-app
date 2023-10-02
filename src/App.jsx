// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { useState } from 'react';

function TodoApp() {
  // State untuk menyimpan daftar tugas
  const [todos, setTodos] = useState([]);
  // State untuk menyimpan tugas yang sedang ditulis
  const [todo, setTodo] = useState('');

  // Menambahkan tugas baru
  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  // Menghapus tugas berdasarkan index
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
