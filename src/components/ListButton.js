import React from 'react'
import styled from 'styled-components'

const ButtonGroup = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
     text-align: center;
    color: #fff;
    font-size: 1rem;
    border: none;
    background-color: ${(props) => props.bg};
    border-radius: 4px;
    padding: 8px 20px;
    width: 120px;
    transition: all .6s;
    &:hover {
        background-color: #8edee8;
        color: #38484a;
    }
`


const ListButton = () => {
    return (
        <ButtonGroup>
            <Button bg="green">All</Button>
            <Button bg="red">Done</Button>
            <Button bg="blue">Todo</Button>
        </ButtonGroup>
    )
}

export default ListButton
