import './Header.css'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from 'react';
import Task from '../Task/Task';
import { useEffect } from 'react';

const getLocalItems = ()=> {
  const list = localStorage.getItem('todo')
  if(list){
    return JSON.parse(localStorage.getItem('todo'))
  } else {
    return []
  }
}

const Header = () => {
  
  const [createText,setCreateText] = useState('')
  const [todoList,setTodoList] = useState(getLocalItems())


  useEffect(()=>{
    //local = [1,2] => [1,2,3]
    localStorage.setItem('todo',JSON.stringify(todoList))
  },[todoList])

  const addTodo = ()=>{
    if(!createText.match(/^\s*$/) ){
      setTodoList([...todoList, {title:createText, isComplete:false}])
    }
  }
  
  return (  
        <div>
          <header className="headers">
              <div className='title'>TODOLIST</div>
          <form className='newTaskForm'>
              <input placeholder='add a new task' type="text"
              value={createText}
              onChange={(e)=>setCreateText(e.target.value)}/>
              <button onClick={addTodo}>
                  Create
                  <AiOutlinePlusCircle size={20}/>
              </button>
          </form>
          
          </header>
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
                      titleTask={todo.title}
                      setTodoList={setTodoList}
                      id={index}
                      todoList={todoList}
                />
              ))}
          </div>
              </section>
        </div>
         )
}

export default Header