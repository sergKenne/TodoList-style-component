import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListContainer = styled.div`
    width: 100%;
`

const TodoList = () => {
    return (
        <TodoListContainer>
          <TodoItem/>  
        </TodoListContainer>
    )
}

export default TodoList
