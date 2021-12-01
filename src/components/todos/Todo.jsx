import React, {useState, useRef, useEffect, } from 'react'
import {completeTodo, deleteTodo, editMode, editTodo} from '../../actions/todoActions' 
import useSound from 'use-sound';
import {useDispatch} from 'react-redux'
import remove from '../../sounds/remove.mp3'

const Todo =  ({todo}) => {
  
  const dispatch = useDispatch()
  const [inputValue, setinputValue] = useState(todo.label)
  const myInput = useRef(null)
  
  const [playRemove] = useSound(
    remove,
    { volume: 0.30 }
  );
  const handlerCheck = () => {
    dispatch(completeTodo(todo.id))
  }
  const handlerDelete =() => {
    dispatch(deleteTodo(todo.id))
}
  const handlerEditMode = ()=>{dispatch(editMode(todo.id))}
  const handlerEditTodo = (e) =>{
    if(e.key === 'Enter') {
      
      dispatch(editTodo(todo.id, inputValue))
      dispatch(editMode(todo.id))
    }
  }
  const handlerEditBlur = () =>{
   
      dispatch(editTodo(todo.id, inputValue))
      dispatch(editMode(todo.id))
  }
 
  useEffect(() => {
    if (todo.editMode) {
      myInput.current.focus()
    }
  }, [todo.editMode])


    
  
    return (
      <>
       
        <li  
              className={todo.complete ? 'todos-complete' : ''} >
                
        
        <input
          type="checkbox"
          checked={todo.complete ? 'checked' : ''}
          onChange={handlerCheck}
          
        />
        {todo.editMode ? <input ref={myInput}type="text" onKeyPress={handlerEditTodo} value={inputValue} onChange={(e)=> setinputValue(e.target.value)} onBlur={handlerEditBlur}/>  
        : 
        <span onDoubleClick={handlerEditMode}>{todo.label}</span>}
        <span className='time-span'>{todo.working ? ` Work Time: ${todo.workingTime} minutes` : ' '}</span>
        <button type="button" onMouseDown={playRemove} onClick={handlerDelete} className=''></button>
        
      </li>
      
    </>
    )
}


export default Todo
