import './App.scss';
import Nav from './Components/Nav/Nav';
import { useState, useEffect } from 'react';
import Todo from './Components/Todo/Todo';
import Covid from './Components/Covid/Covid';
import { CountDown, NewCountDown } from "./Components/CountDown/CountDown";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import BlogDetail from './Components/Blog/BlogDetail';

function App() {
  const [todo, setTodo] = useState([
    { 
      id : 1, 
      title : 'quet nha',
      type : 'viecnha'
    },
    { 
      id : 2, 
      title : 'nau com',
      type : 'viecnha'
    },
    { 
      id : 3, 
      title : 'chay bo',
      type : 'viecngoai'
    },
    { 
      id : 4, 
      title : 'the duc',
      type : 'viecngoai'
    }
  ]);
  const [title, setTitle] = useState('');

  const handleClick = (e) => {
    if (title === '') {
      return;
    }
    let newTodo = {
      id : Math.floor(Math.random() * 1001),
      title : title,
      type : 'viecnha'
    }
    setTodo([
      ...todo,
      newTodo
    ]
    );

    setTitle('');
  }

  const handleChange = (e) => {
    let value = e.target.value;
    if (value) {
      setTitle(value);
    }
  }

  const handleDelete = (id) => {
    let newTodo = todo.filter( item => item.id !== id);
    setTodo(newTodo)
  }

  const timeUp = () => {
    alert('time out');
  }

  useEffect( () => {
  }, [])
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav/>
      </header>
      <div className="container">
        <div className='content'>
        <Routes>
          <Route path="/" element={<Covid />} />
          <Route path="/timer" element={
            <>
             <CountDown 
                timeUp = {timeUp}
            />
            <NewCountDown
                timeUp = {timeUp}
            />
            </>
          } />

          <Route path='/posts' element = {
            <Blog/>
          }/>

          <Route path='/posts/:id' element = {
            <BlogDetail/>
          }/>

          <Route path="/todo" element={
            <>
              <Todo
                todo = {todo}
                title = "all todo"
                handleDelete = {handleDelete}
              >
              </Todo>
              <Todo
                todo = {todo.filter(item => item.type === 'viecnha')}
                title = "viec nha todo"
                handleDelete = {handleDelete}
              >
              </Todo>
              <input 
                type="text"
                value={title}
                onChange={(e) => handleChange(e)}
              />
              <button
                onClick={() => handleClick()}
              >
              Click Me!
              </button>
            </>
          } />

      </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
