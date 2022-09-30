import './Header.css'
import { useEffect } from 'react';
import AddBar from '../AddBar/AddBar';
import TodoList from '../TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';


const getLocalItems = ()=> {
  const list = localStorage.getItem('todo')
  if(list){
    return JSON.parse(localStorage.getItem('todo'))
  } else {
    return []
  }
}

const Header = () => {
  
  
  

  const dispatch = useDispatch();

 

  const todoList =useSelector((state)=>state)
  

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