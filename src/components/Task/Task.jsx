 import React from 'react'
 import './Task.css'
 import { TbTrash } from "react-icons/tb";
 import { AiOutlineEdit } from "react-icons/ai";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeToDo, deleteToDo, editToDo } from '../../actions/todoAction';

 const Task = ({id}) => {
    const [isEdit,setIsEdit] = useState(false)
    const todoList = useSelector((state)=>state)
    const dispatch = useDispatch()




   return (
     <div className='task' >
        <input className='checkContainer' type="checkbox"
                checked={todoList[id].isComplete}
                onChange={()=>{
                    dispatch(completeToDo(id))
                }}
        />
        <input className='edit-task'  
                value={todoList[id].title}
                onChange={(e)=>{
                    dispatch(editToDo(id, e.target.value))   
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
                        dispatch(deleteToDo(id))
        
                    }}>
            <TbTrash size={20}/>
        </button>
     </div>
   )
 }
 
 export default Task