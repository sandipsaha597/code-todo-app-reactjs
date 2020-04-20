import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import {TodoContext} from './TodoContext'
import AddTodo from './AddTodo'

function Todo() {
    const [todos, setTodos] = useContext(TodoContext)

    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
    const editIcon = <FontAwesomeIcon icon={faPencilAlt} />
    const closeIcon = <FontAwesomeIcon icon={faTimes} />

    const [editATodo, setEditATodo] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const [currentEditId, setCurrentEditId] = useState(0)
    
    const deleteTodo = e => {
        let newTodos = [...todos]
        newTodos.splice(e.target.id, 1)
        setTodos(newTodos)
        
    }

    const editTodo = e => {
        setModalShow(true)
        setCurrentEditId(e.target.id)        
        setEditATodo(todos[e.target.id].title)
    }

    const saveTodo = () => {
        const newSave = [...todos]
        newSave[currentEditId].title = editATodo
        setTodos(newSave);
        setEditATodo('')
        setModalShow(false)
    }

    const btn2 = document.querySelector('.edit-box button.sandip-btn')

    const ripple2 = (e) => {
        let x = e.clientX - e.target.getBoundingClientRect().left,
        y = e.clientY - e.target.getBoundingClientRect().top
        
        // console.log("ripple", x, y);
        
        console.log("ripple", e.clientX, e.clientY);
        console.log("ripple offset", e.target.offsetLeft, e.target.offsetTop);

        let ripples = document.createElement('span');
        btn2.appendChild(ripples)
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
      
        setTimeout(() => {
          ripples.remove()
        }, 6000);
    }

    return (
        <div className="todo">
            <AddTodo/>
            <ul className="todo-list">
                {todos.map((todo, index) => <li key={index}>
                        <span>{index} : {todo.title}</span>
                        <div className="buttons">
                            <button 
                            onClick={deleteTodo}
                            id={index}>
                                {deleteIcon}
                            </button>
                            <button type="button"
                            id={index}
                            onClick={editTodo} >
                                {editIcon}
                            </button>
                        </div>
                    </li>
                )}
            </ul>
            <div className="edit-box" 
                style={modalShow ? modal.show : modal.hidden}>
                <input type="text" 
                value={editATodo} 
                onChange={e => setEditATodo(e.target.value)} />
                <button className="sandip-btn" onClick={(e) => {
                    saveTodo()
                    ripple2(e)
                    }
                } disabled={!editATodo.length}>Save</button>
                <button onClick={() => setModalShow(false)} id="close">{closeIcon}</button>
            </div>
        </div>
    )
}

const modal = {
    hidden : {
        pointerEvents: "none",
        opacity: 0,
        transform: "translate(-50%, -50%) scale(.8)"
    },
    show : {
        opacity: 1,
        pointerEvents: "all",
        transform: "translate(-50%, -50%) scale(1)"
    }
  }

export default Todo
