import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {useSelector, useDispatch} from 'react-redux'

import { clearCompletes } from '../../actions/todoActions'

const TodoPages = () => {
  const todoList = useSelector(state => state.todosList)
  const completes = todoList.filter(todo => todo.complete)
  const dispatch = useDispatch()
  const handlerClearCompletes = ()=>{
    dispatch(clearCompletes())
  }
    return (
        <div className="todos" >
      <div className="todos-header">
        <h3 className="todos-title">Todo's App</h3>
        <div>
          <p>
            Tienes <span className="todos-count"></span>{todoList.length - completes.length} Items por hacer!!
          </p>

         
           {
             completes.length > 0 ?  <button
             type="button"
             className="todos-clear"
            onClick={ handlerClearCompletes}
           >
             Borra Completados
           </button> : null
           }
          
        </div>
        
      </div>
      <TodoForm/>
      <TodoList todos={todoList}/>
      
    </div>
    )
}

export default TodoPages
