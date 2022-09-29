import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import './TodoList.css'

const TodoList = () => {
    
    const todoList = useSelector((state)=>state)


  return (
    <section className="tasks">
    <header className="header">
        <div>
            <p className='textPurple'>Create tasks</p>
            <span>{todoList.length}</span>
        </div>
        <div>
             <p className='textPurple'>Completed tasks</p>
             <span>{todoList.filter(
              (todo)=>todo.isComplete == true).length} of {todoList.length}</span>
        </div>
    </header>
    <div className="list">
        {todoList.map((todo,index)=>(
          <Task 
                key={index}
                
                id={index}
                
          />
        ))}
    </div>
        </section>
  )
}

export default TodoList