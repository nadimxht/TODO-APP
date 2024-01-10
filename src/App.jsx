import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      
      newTodo:{
        userInput:"" , 
        id:0,
        checked:false
      },
      todoList:[],
    }
  }
  render() {
    const AddTodo=(e)=>{
      e.preventDefault();
      this.setState({todoList:[...this.state.todoList , this.state.newTodo]})
    }
    const DeleteTodo=(id)=>{
        this.setState({todoList:this.state.todoList.filter(e=>e.id!=id)})
    }
    const CheckTodo=(id)=>{
      this.setState({todoList:this.state.todoList.map(e=>e.id==id ? {...e , checked : !e.checked} : e)})
    }
    return (
      <div>
        <form onSubmit={(event)=>AddTodo(event)}>
          <input type="text" placeholder='new todo' onChange={(event)=>this.setState({
            newTodo:{
              ...this.state.newTodo,
              id:Date.now(),
              userInput:event.target.value
            }
          
          
          })} />
        </form>

        <ul>
          {
            this.state.todoList.map(e=>(
              <div>
              
              <li style={{ textDecoration :e.checked ? "line-through" : "none" }}>{e.userInput}</li>
              <div>
                <button onClick={()=>DeleteTodo(e.id)}>Delete</button>
                <button onClick={()=>CheckTodo(e.id)}>Done</button>
              </div>
              </div>
            ))
          }
        </ul>
       


      </div>
    )
  }
}

// input 

// list todos

// add todo

// delete todo

// check todo
