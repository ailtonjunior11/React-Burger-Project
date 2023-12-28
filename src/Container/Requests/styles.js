import styled from "styled-components";

export const Container = styled.div`

    background: #13121A;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    min-height: 100vh;
`;

export const Image = styled.img`

    height: 290px;
`;

export const Order = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 342px;
    height: 120px;

    background: #FFFFFF30;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #ffffff20;

    padding-left: 15px;
    margin-bottom: 30px;

    outline: none;

    div{

        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    p {

     font-size: 16px;
     font-weight: 300;
     line-height: 21px;
     text-align: left;

     color: #ffffff;
    }

    button {

     background: none;
     border: none;
     cursor: pointer;
     height: 28px;
    }

    img{

        margin-right: 8px;
    }
`;