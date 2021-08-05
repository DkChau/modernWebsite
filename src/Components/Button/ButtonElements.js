import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width:200px;
    height:50px;
    display:flex;
    align-items:center;
    background:#f2674d;
    border-radius:50px;
    justify-content: center;
    text-align:center;
    margin-top: 30px;
    transition:0.3s ease-in-out;
    cursor:pointer;

    &:hover{
        opacity:0.6;
    }
`

export const ButtonText=styled.p`
    color:white;
`