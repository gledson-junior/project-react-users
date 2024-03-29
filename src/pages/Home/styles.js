import styled from "styled-components"
import Background1 from "../../assets/Background1.svg"
import { Link } from 'react-router-dom';


export const Container = styled.div`
    background: url("${Background1}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
    overflow: hidden;
    height: 100vh;
    min-height: 100vh;
`;
export const Image = styled.img`
    margin-top: 30px;
`;
export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 22px; 
    margin-left: 25px;
    letter-spacing: -0.408px;
`;
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;
    
    border: none;
    outline: none;
    
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    
    color: #FFF;
`;
export const A = styled(Link)`

    color: white;
    font-size: bold;
    text-align: center;
    margin-top: 25px;
    width: 150px;
    margin-left: 100px;
    
    &:hover{

    opacity: 0.8;
    transform: scale(1.5);
    transition: 0.5s

}

    &:active{
    opacity: 0.5;
    background-color: pink;
}


`;