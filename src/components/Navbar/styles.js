import styled from "styled-components";

export const NMain = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;

    display: flex;
    justify-content: space-around;
`

export const NItem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const NLink = styled.a`
    cursor: pointer;
    text-decoration: none;

    color: black;

    &:hover{
        text-decoration: underline;
    }
`