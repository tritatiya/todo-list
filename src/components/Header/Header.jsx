import './Header.css'
import { useState } from 'react';
import { useEffect } from 'react';
import AddBar from '../AddBar/AddBar';
import TodoList from '../TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  
  const todoList =useSelector((state)=>state.todo)
  

  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todoList))
  },[todoList])

  return (  
        <div>
          <header className="headers">
              <div className='title'>TODOLIST</div>
          
          <AddBar />
          

          </header>
          <TodoList />
        </div>
         )
}

export default Header