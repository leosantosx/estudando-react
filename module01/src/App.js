import React, { useState, useEffect } from 'react'
import api from './services/api'

export default function App(){
    const [todos, setTodo] = useState([])
    useEffect(() => {
        api.get('/todos').then(response => {
           setTodo(response.data)
        })
    }, [])

    async function handleAddTodo(){
        const newTodo = document.querySelector('[data-todo]')
        const response = await api.post('/todos', { todo: newTodo.value })
        setTodo([...todos, response.data])
        newTodo.value = ''
    }
    
    return (
        <>
            <ul>
                {todos.map(data => <li key={data.id}>{data.todo}</li>)}
            </ul>

            <div>
                <input data-todo type="text" placeholder="write a new todo"/>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </>
    )
}