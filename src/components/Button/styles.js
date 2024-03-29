import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 140px;
    
    
    background: ${ props => props.Back ? 'transparent' : 'rgba(46, 50, 90, 0.80)'} ;
    border-radius: 14px;
    border: ${ props => props.Back ? '2px  solid #FFF' : 'none'};

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
    img{
        transform: ${ props => props.Back ? 'rotateY(180deg)' : 'none'};
    }
    
`;