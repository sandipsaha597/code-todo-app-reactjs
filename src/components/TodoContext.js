import React,{useState, createContext} from 'react'

export const TodoContext = createContext()

export function TodoProvider(props) {
    
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Programmers count from Zero"
        },
        {
            id: 2,
            title: "It has CRUD functionality."
        },
        {
            id: 3,
            title: "It's a todo list app"
        }
    ])

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}
