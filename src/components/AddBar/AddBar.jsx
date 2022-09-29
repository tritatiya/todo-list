import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/slices/todoSlice'

import './AddBar.css'

const AddBar = () => {
    
    const [createText, setCreateText] = useState('')
    const dispatch = useDispatch();
    
    return (
    <form className='newTaskForm'>
              <input placeholder='add a new task' type="text"
              value={createText}
              onChange={(e)=>setCreateText(e.target.value)}/>
              
              <button onClick={(e)=>{
                e.preventDefault();
                dispatch(addTodo({title: createText, isComplete: false}))
                setCreateText('')
                }}>
                  Create
                  <AiOutlinePlusCircle size={20}/>
              </button>


          </form>
  )
}

export default AddBar