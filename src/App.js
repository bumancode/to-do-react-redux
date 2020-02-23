import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskItem } from './components/TaskItem';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
function App() {
  return (
    <div className="todo-container">
      <AddTask/>
      <Tasks/>
        <Footer />
      
    </div>
  );
}

export default App;
