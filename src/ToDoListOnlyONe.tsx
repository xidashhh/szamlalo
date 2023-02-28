import React, { useEffect, useState } from "react";

import { Todo } from './interfaces'

const TodoListOne = () =>{{
    // const [todos, setTodos] = useState <Todo[] | null>(null);
    const [value, setValue] = useState<Todo | null>(null);


    useEffect(() =>{
        fetchTodos().then((value) => {
            setValue(value)
        })
    },[]);

    if (value===null) {
        return <div>Loading..</div>
    } 

    return(
        
        <>
        {console.log(value)}
        
        <h1>{value.title}</h1>
        </>
    )
}}

async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json() as Promise<Todo>;
}

export default TodoListOne;