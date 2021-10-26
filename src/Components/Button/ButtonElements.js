import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width:200px;
    height:40px;
    display:flex;
    align-items:center;
    background:#f2674d;
    border-radius:50px;
    justify-content: center;
    text-align:center;
    transition:0.3s ease-in-out;
    cursor:pointer;

    &:hover{
        opacity:0.6;
    }
    @media (max-width: 768px){
        height:40px;
    }
    @media (max-width: 576px){
        height:30px;
        width:150px;
    }
`

export const ButtonText=styled.p`
    color:white;
`