export const ADD_TO_DO = 'ADD_TO_DO'
export const EDIT_TO_DO = 'EDIT_TO_DO'
export const DELETE_TO_DO = 'DELETE_TO_DO'
export const COMPLETE_TO_DO = 'COMPLETE_TO_DO'

export function addToDo(todo){
    return{
        type: ADD_TO_DO ,
        payload: todo
    }
}

export function editToDo(id, newTitle){
    return{
        type: EDIT_TO_DO,
        payload: {id, newTitle}
    }

}

export function deleteToDo(id){
    return{
        type: DELETE_TO_DO,
        payload: {id}
    }
}

export function completeToDo(id){
    return{
        type: COMPLETE_TO_DO,
        payload: {id}
    }
}

