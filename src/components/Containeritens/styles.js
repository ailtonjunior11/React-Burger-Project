import styled from "styled-components";

export const ContainerItens = styled.div`

    display: flex;
    flex-direction: column;

    padding: 20px;
    margin-top: -50px;

    border-radius: 20px 20px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);

    ${props => props.isBlur && `
    
        backdrop-filter: blur(2.5px);
    `}

    ${props => props.isBlur && `
    
        margin-top: 20px;
    `}
`;