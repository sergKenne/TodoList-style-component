import React from 'react'
import styled from 'styled-components'

const ButtonGroup = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
`

const Button = styled.button`
     text-align: center;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    background-color: ${(props) => props.bg};
    border-radius: 4px;
    padding: 8px 20px;
    width: 40%;
    transition: all .6s;
    cursor: pointer;
    &:hover {
        background-color: #e48b84;
        color: #fff;
    }
`


const FooterButtons = () => {
    return (
        <ButtonGroup>
            <Button bg="#c11f13">Delete done tasks</Button>
            <Button bg="#c11f13">Delete all tasks</Button>
        </ButtonGroup>
    )
}

export default FooterButtons