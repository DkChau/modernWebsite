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
    background-color: #F1FAEE;
    font-family:Oswald;
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
    font-size: 32px;
    padding:0 40px;
    color:#E63946;
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
    padding:40px 0;
    font-size: 1.75rem;
    font-weight:600;
`
export const Link = styled(LinkS)`
    color:#E63946;
    cursor:pointer;
`