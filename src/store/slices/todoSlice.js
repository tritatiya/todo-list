import { createSlice } from "@reduxjs/toolkit"

const initialState = ()=> {
    const list = localStorage.getItem('todo')
    if(list){
      return JSON.parse(localStorage.getItem('todo'))
    } else {
      return []
    }
  }

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState(),
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            // return [...state, action.payload]
        },
        editTodo: (state, action) => {
            // state = state.map(
            //     (todo, index) => index === action.payload.id
            //       ? { ...todo, title: action.payload.newTitle }
            //       : todo
            // )
            return state.map(
                (todo, index) => index === action.payload.id
                  ? { ...todo, title: action.payload.newTitle }
                  : todo
            )
        },
        deleteTodo: (state, action) => {
            // state = state.filter(
            //     (todo, index)=> index !== action.payload.id
            //   )
            return state.filter(
                (todo, index)=> index !== action.payload.id
              )
        },
        completeTodo: (state, action) => {
            return state.map(
                (todo, index) => index === action.payload.id
                  ? { ...todo, isComplete: !todo.isComplete }
                  : todo
              )
        }
    }
})

export const {addTodo, editTodo, deleteTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer