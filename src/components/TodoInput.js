import React, {useState,useRef, useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

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
        outline:none;
        box-shadow: 0px 0px 5px rgba(0,0,0,.8);
       
    }
   
` 

const TodoInput = () => {

    const [inputVal, setInputVal] = useState("");

    const inputRef = useRef(null);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }
    const pushTodo = (text) => {
        const newTodo = {text: text, id: Math.random(), complete: false}
        dispatch(addTodo(newTodo))
        setInputVal("");
        inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <InputContainer>
            <InputWrap>
                <InputForm 
                    value={inputVal} 
                    ref={inputRef} 
                    placeholder="new todo" 
                    onChange={handleChange}
                />
            </InputWrap>
            <InputButton onClick={() => pushTodo(inputVal)}>Add new task</InputButton>
        </InputContainer>
    )
}

export default TodoInput
