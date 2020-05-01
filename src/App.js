import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';

import {TodoProvider} from './components/TodoContext'

function App() {

  const [name, setName] = useState('')

  return (
    <div className="App">
      <h2>Welcome <span className={name.trim() === '' ? "name-placeholder" : "name"}>
        {name.trim() === '' ? "Your Name" : name }</span>
      </h2>
      <input type="text" 
      className="name-input"
      placeholder="Your name" 
      value={name} 
      onChange={e => setName(e.target.value)} />
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}


export default App; 
