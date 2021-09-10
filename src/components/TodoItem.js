import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

const TodoItemRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px 15px;
    margin-bottom: 4x;
`


const TodoText = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
`
const TodoItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
   
`


const TodoItem = ({task}) => {
    return (
        <TodoItemContainer>
           <TodoItemRow>
               <TodoText>{task.text}</TodoText>
               <TodoItemButtons>
                   <Checkbox   
                        style={{ color: "#0cafc3"}}
                        checked={task.complete}
                   />
                   <CreateIcon 
                        style={{color: "green", cursor: "pointer"}}
                   />
                   <DeleteIcon 
                        style={{color: "red", cursor: "pointer", fontSize: "1.5rem" }}
                   />
               </TodoItemButtons>
            </TodoItemRow> 
        </TodoItemContainer>
    )
}

export default TodoItem
