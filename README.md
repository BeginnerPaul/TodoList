# Activity (React) TODO_LIST

This Todolist activity built with React is a web application that allows users to create, read, update, and delete tasks that need to be done. The project typically consists of a list of tasks, a form to add new tasks, and buttons to edit or delete existing tasks.

# Instructions for running the program
To run a React Todolist project, you will need to follow these steps:

Step 1: Install Node.js and npm on your computer.

Step 2: Open your command prompt or terminal and navigate to the project directory.

Step 3: Run the command npm install to install all the necessary dependencies.

Step 4: Once the installation is complete, run the command npm start to start the development server.

Step 5: Open your web browser and navigate to the URL http://localhost:3000/ to see the application running.

# Usage
Simply follow these steps to utilize the To-Do List app.

Step 1: Add tasks
To add a task, click or tap on the "Add Task" button or text box. Enter the details of the task, such as the task name, description, and due date, if applicable.

Step 2: Edit or delete tasks
If you need to edit or delete a task, find the task in the list and click or tap on it. Depending on the app, you may need to swipe left or right on the task to reveal options for editing or deleting it. Edit the task details as needed, or select the "Delete" option to remove the task from the list.

Step 3: Mark tasks as complete
Once you have completed a task, mark it as complete by clicking or tapping on the checkbox or circle next to the task name. Some apps may automatically move completed tasks to a separate list or archive them.

# Code Description

In this code, the "useState" hook is being utilized to generate three distinct state variables. The first of these is called "taskList," which is an array data type that holds all of the tasks that the user has added. The second variable is "newTask," which is a string data type representing the text entered by the user into an input field. Lastly, there is a third variable called "searchQuery," which is also a string data type representing the text entered by the user into a search field.

import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  
  # Adding Task
  
  The "handleAddTask" method is invoked when the "Add Task" button is clicked by the user. This function determines whether the text submitted by the user into an input field, represented by the "newTask" string, is not empty. The function creates a new task object if the string contains no empty characters. The text of the job is contained in this object, along with a "completed" flag that is initially set to "false" and a timestamp indicating when the work was added.

The "handleAddTask" function then calls the "setTaskList" function to add the newly created task object to the "taskList" array. In order for the user to see the new task object, this changes the state of the "taskList" variable. 
In result, adding a fresh task to the already-existing list of tasks is the responsibility of the "handleAddTask" function. Before creating a new task object with pertinent information like the task's text and the time it was added, it first verifies that the user has supplied some text for the new task. In order to update the state, it uses the "setTaskList" function to add the new task object to the "taskList" array.

  
  import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

# Trash icon or Delete Task and Edit Task

The handleDeleteTask function is called with the task's inserted timestamp as the argument when the user selects the Delete button next to a task. This function modifies the taskList state variable using the setTaskList function, finds the task's index in the taskList array using the findIndex method, then produces a new array sans the task using the splice method.

The button on my delete and edit task was imported in the react.io that i install before in the terminal by using npm install. 

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

# Edit Task

The handleEditTask button is called with the task's updated timestamp and the new text as parameters when the user hits the Edit button next to a task. This function retrieves the task's index in the taskList array using the findIndex method, edits the task's text using the setTaskList function, and changes the taskList state variable.


import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

# Application interface
![image](https://user-images.githubusercontent.com/132192759/235546961-b19cf9dc-87d6-4571-a93b-24177e40ace9.png)


