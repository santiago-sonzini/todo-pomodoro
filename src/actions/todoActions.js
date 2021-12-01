import * as types from './actionTypes'
import { Todo } from '../models/Todo'

export const addTodo = (text) => ({
    type: types.ADD_TODO,
    payload: new Todo(text),
})
export const completeTodo = (id ) => ({type: types.COMPLETE_TODO, id})
export const deleteTodo = (id) => ({type:types.DELETE_TODO, id})
export const clearCompletes = () => ({type:types.CLEAR_COMPLETES})
export const editMode = (id) => ({type:types.EDIT_MODE, id})
export const editTodo = (id, label) => ({type:types.EDIT_TODO, id, label})
export const workingTodo = (todo) => ({type:types.WORKING_TODO, todo})
export const removeWorkingTodo = (todo) => ({type:types.REMOVE_WORKING_TODO, todo})
export const updateTodoTime = (minutes, currentMinutes ) => ({type:types.UPDATE_TODO_TIME, minutes, currentMinutes})