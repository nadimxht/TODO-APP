import React,{useState} from 'react'
import TodoList from './TodoList'

export default function App() {
  const [todoList , setTodoList]=useState([])
  const [text , setText] = useState("");
  const [newTodo , setNewTodo]=useState({
    id:0 , 
    text:"",
    isDone:false,
  })
  const handleChange=(e)=>{
    setText(e.target.value) ; 
    setNewTodo((prev)=>{return {...prev, id:Date.now() , text:e.target.value}})
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault() ; 
        setTodoList((prev)=>[...prev , newTodo])
        setText("");
      }}>
        <input value={text} type='text' placeholder='new todo' onChange={(event)=>handleChange(event)} />
      </form>
      <TodoList setTodoList={setTodoList} todoList={todoList}  />
    </div>
  )
}



// e commerce 
// productList 
// product card 
// search 
// filter category price
// add to cart 
// cart : products , Total 

// movie app 
