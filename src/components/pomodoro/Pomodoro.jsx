import './Pomodoro.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useSound from 'use-sound';
import alarma from '../../sounds/alarma.mp3'
import click from '../../sounds/click.mp3'
import { updateTime } from '../../actions/timeActions';
import {  updateTodoTime,  } from '../../actions/todoActions';





export const Pomodoro = () => {

    //todo variables
    const dispatch = useDispatch()
    const todosList = useSelector(state => state.todosList)
    const time = useSelector(state => state.time)
    const [todoID, settodoID] = useState(null)
    const notCompleted = todosList.filter(todo => todo.complete === false)
    const selectedTodo  = todosList.filter((todo) => todo.id === todoID)
    console.log(notCompleted);


    //pomodoro states
    const [on, setOn] = useState(false)
    const [mode, setMode] = useState('Work')
   
    
    
    //sounds
    const [playAlarm] = useSound(
        alarma,
        { volume: 0.30 }
      );
    const [playClick] = useSound(
        click,
        { volume: 0.39 }
    );
    


     
    //handlers
    

    const handlerChangeON = ()=> {
        setOn(!on)
        
    }
    const handlerBreak = () => {
        setMode(2)
        setOn(false)
        dispatch(updateTime(5,0))
        
        
    }
    const handlerWork = () => {
        setMode(1)
        setOn(false)
        dispatch(updateTime(25,0))
        
    }
    const handlerSubmitTodo = (e)=> {
        settodoID(e.target.value)
    }
    const handlerRemoveTodo = () => {
        settodoID(null)
    }
    
  useEffect(() => {
   
        if (on) {
            let interval = setInterval(() => {
                clearInterval(interval);
          
                if (time.seconds === 0) {
                  if (time.minutes !== 0) {
                    
                    //setMinutes(minutes - 1);
                    dispatch(updateTime(time.minutes - 1, 59))
                    if (mode === 'Work') {
                        dispatch(updateTodoTime(25, time.minutes))
                    }
                    
                  } else {
                     setMode( mode === 1 ? 2 : 1)
                     playAlarm()
                  }
                } else {
                    
                    dispatch(updateTime(time.minutes , time.seconds - 1));
                    
                }
              }, 1000);
        } 
    
  }, [on,mode,time.minutes,time.seconds, playAlarm, dispatch, ])

  useEffect(() => {
      if (selectedTodo.length > 0) {
        if (selectedTodo[0].complete === true) {
            handlerRemoveTodo()
  
        } else return
      }
          
      
  } , [selectedTodo])
    
    const timerMinutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
    const timerSeconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;
    
    
    
   
   
    
    return (

        <div className='card' >
           
           
                 <span className='pomoMode'>
                    
                    <button className='btn mode' onClick={handlerBreak}>Rest</button>
                    <button className='btn mode' onClick={handlerWork}>Work</button>
                    
                 </span>

                <span className='timer'>
                    <h1 >{timerMinutes}:{timerSeconds}</h1>
                </span>
                
                <button className='btn' onMouseDown={playClick}  onClick={handlerChangeON}>{on ? 'Stop' : 'Start'}</button>
                
                         {selectedTodo.length !== 0 ?
                            <div>
                                <h3 >working on: {selectedTodo[0].label} for {selectedTodo[0].workingTime} minutes</h3> 
                                <button className='btn' onClick={handlerRemoveTodo}>remove from workspace</button>
                            </div>
                                :
                            
                                <select  className='btn' onChange={handlerSubmitTodo}>
                                <option value="" selected disabled hidden> Choose a todo</option>
                                {notCompleted.map((todo)=> {
                                    return <option key={todo.id} className=''value={todo.id} >{todo.label}</option>
                                })}
                            </select>
                            
                        }
                             
                           
                         
                  


        </div>
    )
}
