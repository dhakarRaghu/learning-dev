/** @satisfies {import('@webcontainer/api').FileSystemTree} */
export const files = {
  "index.html": {
    file: {
      contents: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Todo App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/main.jsx"></script>
</body>
</html>
`.trim(),
    },
  },
  "package.json": {
    file: {
      contents: `
{
  "name": "react-todo-app",
  "version": "0.1.0",
  "type": "module",
  "dependencies": {
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "vite": "latest"
  },
  "scripts": {
    "dev": "vite"
  }
}
`.trim(),
    },
  },
  "main.jsx": {
    file: {
      contents: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`.trim(),
    },
  },
  "App.jsx": {
    file: {
      contents: `
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {todo}
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
`.trim(),
    },
  },
  "vite.config.js": {
    file: {
      contents: `
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3111,
    open: true,
  },
});
`.trim(),
    },
  },
};