import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoListContainer = styled.div`
    width: 100%;
    margin-top: 3.3rem;
`

const TodoList = () => {

    const {tasks} = useSelector(state => state.todo)
    console.log("tasks:", tasks);

    return (
        <TodoListContainer>
          {tasks.map(task => <TodoItem key={task.id} task={task}/>)}  
            
        </TodoListContainer>
    )
}

export default TodoList
