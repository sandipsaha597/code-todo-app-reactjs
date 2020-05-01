import React,{useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const TodoContext = createContext()

export function TodoProvider(props) {
    
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Loading..."
        }
    ])

    useEffect(() => {
        // console.log(todos);
        axios.get('https://shielded-island-06481.herokuapp.com/api/todos')
        .then((res) => {
            setTodos(res.data)
        })
        
    }, [])

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}
