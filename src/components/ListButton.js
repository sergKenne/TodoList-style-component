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
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    background-color: ${(props) => props.bg};
    border-radius: 4px;
    padding: 8px 20px;
    width: 30%;
    transition: all .6s;
    &:hover {
        background-color: #8edee8;
        //color: #38484a;
    }
`


const ListButton = () => {
    return (
        <ButtonGroup>
            <Button bg="#0cafc3">All</Button>
            <Button bg="#0cafc3">Done</Button>
            <Button bg="#0cafc3">Todo</Button>
        </ButtonGroup>
    )
}

export default ListButton
