import { createContext, useReducer } from "react"

import { reducer } from "../useReducer/Reducer"

const init ={
    todo:[]
}


export const Todo = createContext(init)


export const TodoProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,init)

    const addTodo =(value)=>{
        const update = state.todo.concat(value)
        dispatch({
            type:"ADD_TODO",
            payload:{
                updated:update
            }
        })
    }

    const removeTodo =(value)=>{
        const remove = state.todo.filter((todo,index)=> index !== value)
        dispatch({
            type:"REMOVE_TODO",
            payload:{
                removed:remove
            }
        })
    }

    const value = {
        todo:state.todo,
        addTodo,
        removeTodo
    }
    return(
        <Todo.Provider value={value}>
              {children}
        </Todo.Provider>
    )
}

