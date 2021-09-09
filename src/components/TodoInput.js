import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 30px;
`

const InputButton = styled.button`
        text-align: center;
        color: #fff;
        font-size: 1.1rem;
        border: none;
        background-color: #0cafc3;
        border-radius: 4px;
        width: 100%;
        padding: 8px;
        transition: all .6s;
        &:hover {
            background-color: #8edee8;
            color: #38484a;
        }
`

const InputWrap = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1.5rem;
`

const InputForm = styled.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 6px;
    font-size: 1.1rem;
    &:focus-visible {
        outline: 1px solid rgba(#000, .5);
        border: none;
    }
   
` 



const TodoInput = () => {
    return (
        <InputContainer>
            <InputWrap>
                <InputForm placeholder="new todo" />
            </InputWrap>
            <InputButton>Add new task</InputButton>
        </InputContainer>
    )
}

export default TodoInput
