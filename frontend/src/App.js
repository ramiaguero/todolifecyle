import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'; // Added import statement for TodoList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo App</h1> {/* Updated header */}
      </header>
      <main>
        <TodoList /> {/* Added TodoList component */}
      </main>
    </div>
  );
}

export default App;
