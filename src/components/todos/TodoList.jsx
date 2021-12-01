import React from 'react'
import Todo from './Todo'




const TodoList = ({todos}) => {
    

    return (
        <ul className='todos-list'>
            {todos?.map((todo)=>  <Todo key={todo.id} todo={todo} />)}
        </ul>
    )
}

export default TodoList
