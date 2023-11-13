import  { useState } from 'react';
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
