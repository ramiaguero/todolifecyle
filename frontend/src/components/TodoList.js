import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = (title) => {
    axios.post('http://localhost:5000/todos', { title })
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
  };

  const updateTodo = (id, updatedTodo) => {
    axios.put(`http://localhost:5000/todos/${id}`, updatedTodo)
      .then(response => setTodos(todos.map(todo => (todo._id === id ? response.data : todo))))
      .catch(error => console.error(error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
