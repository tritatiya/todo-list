 import React from 'react'
 import './Task.css'
 import { TbTrash } from "react-icons/tb";
 import { AiOutlineEdit } from "react-icons/ai";
import { useState } from 'react';

 const Task = ({titleTask,setTodoList,id,todoList}) => {
    const [isEdit,setIsEdit] = useState(false)
    
   return (
     <div className='task' >
        <input className='checkContainer' type="checkbox"
                checked={todoList[id].isComplete}
                onChange={()=>{
                    let newBox = [...todoList]
                    newBox[id].isComplete = !newBox[id].isComplete
                    setTodoList(newBox)
                }}
        />
        <input className='edit-task'  
                value={todoList[id].title}
                // value={titleTask}
                onChange={(e)=>{
                    let newList = [...todoList]
                    newList[id].title = e.target.value
                    setTodoList(newList)
                }}  
                disabled={isEdit 
                    ? '' 
                    : 'disabled'}
                style={{
                    backgroundColor:isEdit && '#fff'
                    ,
                    color:isEdit && 'blue',
                    textDecoration: todoList[id].isComplete && 'line-through'  

                }}
        />

        <button className="editButton" 
                    onClick={()=>{setIsEdit(!isEdit)}}>
            <AiOutlineEdit size={20}/>
        </button>
        <button className="deleteButton" 
                    onClick={()=>{
                        // const x = [3,4,5,6,7];
                        // x.filter((v, i)=> i !== 2)
                        // x = [3,4,6,7]

                        setTodoList(todoList.filter(
                        (todo, index) => index !== id))
                    }}>
            <TbTrash size={20}/>
        </button>
     </div>
   )
 }
 
 export default Task