import React, { useState, useEffect, createContext } from 'react'
import "./App.css"
import Form from './components/Form'
import Todolist from './components/Todolist'
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);

const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [theme, setTheme] = useState('light');
  
  const filterHandler = () =>{
    switch(filter){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  } 

  useEffect(() =>{
    filterHandler();
  }, [ todos, filter])

  const toggleTheme = () =>{
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
   <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='app__main' id={theme}>
      <header className='app__header'>
        My Todolist
      </header>
      <Form 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          inputText={inputText}
          setFilter={setFilter}
      />
      <Todolist 
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
      <div className='app__darkmode'>
        <label> {theme === 'light' ? "Light mode" : "Dark mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>  
      </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App