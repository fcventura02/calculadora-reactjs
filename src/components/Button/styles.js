import styled from "styled-components";

export const ButtonContainer = styled.button`
    flex: 1;
    padding: 20px 15px ;
    border: 1px solid #cdcdcd;
    cursor: pointer;
    background-color: #15AAFF;
    color: #fff;
    font-size: 24px;
    font-weight: bold;

    transition: opacity .1s ease-in;
    &:hover{
        opacity: 0.6;
    }
`