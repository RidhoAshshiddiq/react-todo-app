// import React from 'react'
// import ReactDOM from 'react-dom'
// import TodoApp from './App.jsx'


// ReactDOM.render(
//   <React.StrictMode>
//     <TodoApp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './App.jsx'

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found.");
}
