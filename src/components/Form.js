import React from 'react'
import './Form.css'
import { GoDiffAdded } from 'react-icons/go'

const Form = ({ setInputText, todos, setTodos, inputText, setFilter }) => {

  const inputTextHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
    ]);
    setInputText("");
  };

      const statusHandler = (e) =>{
        setFilter(e.target.value)
      }

  return (
    <form className='todo-form'>
        <input 
          value={inputText} 
          onChange={inputTextHandler} 
          type="text" 
          className="todo-input"
        />
        <button onClick={submitTodoHandler} className='todo-button' type='submit'>
         <GoDiffAdded    />
        </button> 
        <div className='select'>
          <select onChange={statusHandler} name='todos' className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
    </form>
  )
}

export default Form