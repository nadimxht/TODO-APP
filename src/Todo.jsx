import React from 'react'

export default function Todo({todo,setTodoList}) {
  return (
    <div>
        <p>{todo.text}</p>
        <button onClick={()=>setTodoList((prev)=>prev.filter(e=>e.id!==todo.id))}>delete</button>
    </div>
  )
}
