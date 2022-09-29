import { ADD_TO_DO, COMPLETE_TO_DO, DELETE_TO_DO, EDIT_TO_DO } from "../actions/todoAction"



const getLocalItems = ()=> {
    const list = localStorage.getItem('todo')
    if(list){
      return JSON.parse(localStorage.getItem('todo'))
    } else {
      return []
    }
  }

export function todoReducer(state=getLocalItems(), action) {
    switch(action.type){
        case ADD_TO_DO :
            return [...state, action.payload]
        case EDIT_TO_DO:
            return state.map(
              (todo, index) => index === action.payload.id
                ? { ...todo, title: action.payload.newTitle }
                : todo
            )
        case DELETE_TO_DO:
            return state.filter(
              (todo, index)=> index !== action.payload.id
            )
        case COMPLETE_TO_DO:
              return state.map(
                (todo, index) => index === action.payload.id
                  ? { ...todo, isComplete: !todo.isComplete }
                  : todo
              )
        
            default:
                return state
        
    }

}