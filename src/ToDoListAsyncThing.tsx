import React, { useEffect, useState } from "react";
import { useAsync } from "react-async"
import { Todo } from './interfaces'

interface Props {
    id: number
}


const TodoListAsync = (props: Props) =>{
    const { data, error, isPending } = useAsync({ promiseFn: fetchTodos})
  if (isPending) return <>"Loading..."</>
  if (error) return <>`Something went wrong: ${error.message}`</>
  if (data)
    return (
        <>
      <div>{data.title}
      </div>
      </>
    )
  return <>null</>}

// async function fetchTodos() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return response.json() as Promise<Todo>;
// }

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    if (!res.ok) throw new Error(res.statusText)
    return res.json() as Promise<Todo>
  }

export default TodoListAsync;