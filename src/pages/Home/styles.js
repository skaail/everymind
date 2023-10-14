import styled from "styled-components";

export const HMain = styled.div`
    margin: 0;

    display: flex;
    flex-direction: column;

    height: 100vh;

    background-color: #f4f4f4;
`

export const HHeader = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    font-weight: bold;
    color: #101010;
`

export const HBanner = styled.div`
    width: 100%;
    height: 400px;

    display: flex;
`

export const HText = styled.div`
    height: 100%;
    width: 50%;
    background-color: #2eca72;

    color: white;
`

export const HTextInside = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HImage = styled.img`
    height: 100%;
    width: 50%;
    background-color: black;

    object-fit: cover;
`