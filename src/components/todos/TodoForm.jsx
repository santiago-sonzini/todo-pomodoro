import React, {useState} from 'react'
import {useDispatch,} from 'react-redux'
import { addTodo } from '../../actions/todoActions'

const TodoForm = () => {
    const dispatch = useDispatch()
    const [inputValue, setinputValue] = useState('')
    const [placeholderValue, setPlaceholderValue] = useState("Que vas hacer KING????")
    const [error, setError] = useState(null)
    const handlerSubmit = (e)=> {
      if (inputValue !== '') {
        e.preventDefault()
        setError(null)
        setPlaceholderValue("Que vas hacer KING????")
        dispatch(addTodo(inputValue))
      }else {
        e.preventDefault()
        setError(true)
        setPlaceholderValue('No funca si no escribis nada genio')
      
      }
      
    }

    return (
    <form className="todos-form" name="todos" onSubmit={handlerSubmit}>
        <input
        style={error ? {border: 'red 1px solid' } : {border: '1px solid #dcdfe4'} }
        type="text"
        placeholder={placeholderValue}
        name="todo"
        value={inputValue}
        onChange={(e)=>setinputValue(e.target.value)}
      />
      <small>Escribi algo KING!!!!</small>
    </form>
    )
}

export default TodoForm
