import React, {useState, useContext} from 'react'
import {TodoContext} from './TodoContext'

function AddTodo() {

    const [todos, setTodos] = useContext(TodoContext)
    const [currentTodo, setCurrentTodo] = useState('')
    const [count, setCount] = useState(todos.length + 1)

    const updateTodo = () => {
        setCount(prevCount => prevCount + 1)
        
        setTodos([...todos, 
            {
                id: count,
                title: currentTodo
            }
        ])
        setCurrentTodo('')
    }

    const btn = document.querySelector('.sandip-btn')
    const ripple = (e) => {
        let x = e.clientX - e.target.offsetLeft,
        y = e.clientY - e.target.offsetTop
        

        let ripples = document.createElement('span');
        btn.appendChild(ripples)
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
      
        setTimeout(() => {
          ripples.remove()
        }, 5000);
    }

    return (
        <div className="data-submit">
            <input type="text"
            placeholder="What's your focus today"
            value={currentTodo} 
            onChange={e => setCurrentTodo(e.target.value)} />
            <button className="sandip-btn" onClick={e => {
                updateTodo()
                ripple(e)
                }
            }
                disabled={!currentTodo.length}>Add</button>
        </div>
    )
}

export default AddTodo
