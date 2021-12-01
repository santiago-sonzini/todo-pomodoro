import { ADD_TODO, CLEAR_COMPLETES, COMPLETE_TODO, DELETE_TODO, EDIT_MODE, EDIT_TODO, WORKING_TODO, UPDATE_TODO_TIME , REMOVE_WORKING_TODO} from "../actions/actionTypes";
const initialState = []

export const todoReducer = (state= initialState, action)=> {
    switch (action.type) {
        case ADD_TODO:
            
            return [...state, action.payload]
        case COMPLETE_TODO:
            state = state.map(todo => {
                if (todo.id === action.id) {
                    return{
                        ...todo,
                        complete: !todo.complete,
                    }
                }
                return todo
            })
            return state
            case DELETE_TODO:
                state = state.filter(todo => todo.id !== action.id)
                return state
            case CLEAR_COMPLETES:
                state = state.filter(todo => !todo.complete)
                return state
            case EDIT_MODE: 
                state = state.map(todo => {
                    if (todo.id === action.id) {
                        return{
                            ...todo,
                            editMode: !todo.editMode,
                    }
                    
                }
                return todo
            }) 
            return state
            case EDIT_TODO: 
                state = state.map(todo => {
                    if (todo.id === action.id) {
                        return{
                            ...todo,
                            label: action.label,
                    }
                    
                }
                return todo
            }) 
            return state
            case WORKING_TODO: 
                
                state = state.map(todo => {
                    
                    if (action.todo[0].id === todo.id) {
                        
                        return{
                            ...todo,
                            
                            working: true,
                    }
                    
                }
                return todo
            }) 
            
            return state
            case REMOVE_WORKING_TODO: 
            state = state.map(todo => {
                    
                if (todo.working) {
                    
                    return{
                        ...todo,
                        working: false,
                }
                
            }
            return todo
        }) 
        
        return state
            case UPDATE_TODO_TIME:
                state = state.map((todo) => {
                    if (todo.working) {
                        return {
                            ...todo, 
                            workingTime:  action.minutes - action.currentMinutes + todo.workingTime 
                        }
                    }return todo
                }) 
                return state
        default:
            return state;
    }
}