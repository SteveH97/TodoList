import React from 'react'
import './Todo.css'
import { BiCheck, BiTrash } from 'react-icons/bi'

const Todo = ({text, todo, todos, setTodos}) => {
    
  const deleteHandler = () =>{
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const completeHandler = () =>{
    setTodos(todos.map(item =>{
      if(item.id === todo.id){
        return{
          ...item, completed:!item.completed
        }
      }
      return item;
    }))
  }


  return (
    <div className='todo'>
        <li className={`todo__item ${todo.completed ? 'todo__completed' : ''}`}>{text}</li>
        <button onClick={completeHandler} className='todo__buttonCheck'>
            <i className='todo__i'><BiCheck/></i>
        </button>
        <button onClick={deleteHandler} className='todo__buttonTrash'>
            <i className='todo__i'><BiTrash/></i>
        </button>
    </div>
  )
}

export default Todo