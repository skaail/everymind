import styled from "styled-components";

export const PMain = styled.div`
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: fit-content;

    background-color: #f4f4f4;
`

export const PCont = styled.div`
    margin: 50px;

    background-color: white;

    border-radius: 15px;

    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PHeader = styled.div`
    width: 100%;
    height: 20em;

    display: flex;
`

export const HImg = styled.div`
    height: 100%;
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgImg = styled.img`
    border: solid 1px black;

    height: 15em;
    width: 15em;

    border-radius: 50%;
`

export const HInfo = styled.div`
    height: 100%;
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const INome = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 20px;
`

export const PDiv = styled.div`
    width: 95%;
    height: 2px;
    background-color: #eeeeee;
    border-radius: 50%;
`

export const PExp = styled.div`
    width: 100%;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 200px;
`
