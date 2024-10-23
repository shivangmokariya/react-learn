import React, { useState } from 'react'
import TodoContext from './TodoContext'

const TodoContextProvider = ({children}) => {
    const [todo,setTodo] = useState(null)
    return(
        <TodoContext.Provider value={{todo,setTodo}} >
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;