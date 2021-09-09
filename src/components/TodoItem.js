import React from 'react'
import styled from 'styled-components'

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
`

const TodoLabel = styled.label`

`
const TodoCheckbox = styled.input`

`

const TodoText = styled.span`

`


const TodoItem = () => {
    return (
        <TodoItemContainer>
           <TodoLabel>
               <TodoCheckbox type="checkbox" />
                <TodoText>new todo in list </TodoText>
            </TodoLabel> 
        </TodoItemContainer>
    )
}

export default TodoItem
