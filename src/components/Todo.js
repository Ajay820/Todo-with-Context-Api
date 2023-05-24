import React, { useContext, useState } from 'react'

import { Todo } from '../context/State'

export const Todo1 = () => {
    const [value,setValue] = useState('')
    const {addTodo,todo,removeTodo}  = useContext(Todo)
  return (
    <div>
        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={()=>addTodo(value)}>OnClick</button>
        {
            todo.map((todo,index)=>(
                <div key={index}>
                    <input type="text " value={todo}/>
                    <button onClick={()=>removeTodo(index)}>del</button>
                </div>
            ))
        }
    </div>
  )
}
