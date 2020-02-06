import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskItem } from './components/TaskItem';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
function App() {
  return (
    <div>

      <TaskItem
        title="Task 1"
        checked={false}
      />
      <TaskItem
        title="Task 2"
        checked={true}
      />
      <TaskItem
        title="Task 3"
        checked={false}
      />

      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
