import './style.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

const url = ' http://localhost:8000/todos'

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
      })
      .then(data => {
        setTodos(data);
        console.log(`result of 1st fetch ${data}`);
      })
      .catch(err => console.warn(err));
  }, []);

  const addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(r => {
        if (r.ok) {
          return r.json()
        }
      })
      .then(todo => {
        setTodos([...todos, todo])
        console.dir(`added todo after addtodo ${todo}`);
      })

    console.dir(`newTodo: ${newTodo}`);
  }

  const removeTodo = (todoId) => {
    console.log(todoId);
    fetch(`${url}/${todoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setTodos([...todos.filter(({ id }) => id !== todoId)]);
        } else {
          console.error("Server returned an error code.");
        }
      })
      .catch(e => {
        console.error("Something went wrong while trying to send a DELETE request to the server.");
      });
  }

  const changeTodo = (todoId) => {
    const checkedToDo = todos.find(({ id }) => id === todoId);
    fetch(`${url}/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify({ ...checkedToDo, completed: true }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => {
        if (response.ok) {
          setTodos([...todos.map(todo => ({ ...todo, completed: todo.id === todoId ? true : todo.completed }))]);
        } else {
          console.error("Server returned an error code.");
        }
      })
      .catch(e => {
        console.error("Something went wrong while trying to send a DELETE request to the server.");
      });
  };


  return (
    <div className="page">
      <Header />
      <main className="todo-app">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          changeTodo={changeTodo}
          removeTodo={removeTodo} />
        <Counter todos={todos} />
      </main>
    </div>
  );
}
export default App