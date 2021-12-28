import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll';

export const MenuContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    justify-content: center;
    align-items: center;
    position:fixed;
    opacity: ${({open})=>(open?'100%' : '0%')};
    width:100%;
    height:100vh;
    background-color: white;
    top: 0;
    left:${({open})=>(open?'0' : '-100%')};
    z-index:999;
    transition:0.3s ease-in-out;


`
export const CrossIcon = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items:center;
    height:100%;
    width:90%;
    padding-right:25px;
    font-size: 2rem;
    color:#f2674d;
    &:hover{
        opacity:0.6;
    }
`
export const Menu = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:center;
    width:100%;
    height:100%;
    padding-top: 20px;
`
export const MenuLink = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding:20px 0;
    font-size: 1.5rem;
    color:#f2674d;

`
export const Link = styled(LinkS)`
    cursor:pointer;
    &:hover{
        opacity:0.6;
    }
`