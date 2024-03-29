import styled from "styled-components"
import Background2 from "../../assets/Background2.svg"


export const Container = styled.div`
    background: url("${Background2}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: calc(100vh - 170px);
`;
export const Image = styled.img`
    margin-top: 30px;
`;
export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 140px;
    
    
    background: transparent;
    border-radius: 14px;
    border: 2px  solid #FFF;
    box-shadow: 2px 2px 3px #000;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    

    color: #FFF;
    
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    &:hover{

        opacity: 0.8;

    }

    &:active{
        opacity: 0.5;
        background-color: pink;
    }
    
`;

export const User = styled.li`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    border: none;
    outline: none;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        text-shadow: 2px 2px 3px #000;
    
        color: #FFF;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`;




