import styled from "styled-components";


export const Button = styled.button`

    width: 342px;
    height: 68px;

    background: #d00000;

    border: none;

    font-size: 18px;
    font-weight: 900;
    line-height: 3px;
    letter-spacing: 0px;
    text-align: center;

    color: #FFFFFF;

    cursor: pointer;

    &:hover {

        opacity: 0.9;
        transition: 0.5s;
    }

    &:active {

        opacity: 0.7;
    }
`;