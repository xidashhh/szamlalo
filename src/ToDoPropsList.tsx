import React, { useEffect, useState } from "react";

import { Todo } from './interfaces'

interface Props {
    id: number
}

const TodoItem = (props: Props) =>{{
    // const [todos, setTodos] = useState <Todo[] | null>(null);
    const [value, setValue] = useState<Todo | null>(null);
    const [idUser, setIdUser] = useState()


    useEffect(() =>{
        fetchTodos(props.id).then((value) => {
            setValue(value)
        })
    },[props.id]);

    if (value===null) {
        return <div>Loading..</div>
    } 

    return(
        
        <>
        <div>
            {value.title}
        </div>

        </>
    )
}}

async function fetchTodos(id: number) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
    return response.json() as Promise<Todo>;
}

export default TodoItem;