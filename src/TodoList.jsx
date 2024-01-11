import React from 'react'
import Todo from './Todo'
export default function TodoList({todoList,setTodoList}) {
  return (
    <div>
        {
            todoList.map(e=>(
                <Todo setTodoList={setTodoList} key={e.id} todo={e} />
            ))
        }
    </div>
  )
}
