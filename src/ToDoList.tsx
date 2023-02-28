import React, { useEffect, useState } from "react";

import { Todo } from './interfaces'

const TodoList = () =>{{
    // const [todos, setTodos] = useState <Todo[] | null>(null);
    const [value, setValue] = useState<Todo[] | null>(null);


    useEffect(() =>{
        fetchTodos().then((todos) => {
            setValue(todos)
        })
    },[]);

    if (value===null) {
        return <div>Loading..</div>
    } 

    return(
        
        <>
        <div>
            {value?.length}
        </div>
        {console.log(value[1])}
        <h1>{value[1].title}</h1><h3>{value[1].completed.toString()}</h3>
        </>
    )
}}

async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json() as Promise<Todo[]>;
}

export default TodoList;