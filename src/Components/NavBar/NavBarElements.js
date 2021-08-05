import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const NavContainer = styled.div`
    width:95%;
    height:100px;
    margin: 0 auto;
    position:sticky;
    top:0; 
    margin-top:-100px;
    padding: 0 80px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: center;
    align-content: center;
    font-family:'Open Sans';
    color:black;
    background: #ffffff;
`

//Logo Elements
export const LogoWrapper = styled.div`
    width:auto;
    height:auto;
    display: flex;
    justify-content: center;
    align-items:center;
`
export const Logo = styled.h1` //Actually A Link

    color:black; //Design
    font-size:45px;
    font-weight: 300;
`

//Link Elements
export const NavLinks = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    justify-self: center;
    max-width: 600px;
    width:80%;
`
export const LinkWrapper = styled.div`
    display:flex;
    width:auto;
    height:auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const Link = styled(LinkS)`
    color:black; //Design
    font-size:18px;
    padding:5px 0;
    cursor:pointer;
    font-weight:300;
    transition:color 0.3s;

    &:hover{
        color:#f2674d;
    }
        &.active{
        color:#f2674d;
        border-bottom: 3px solid #f2674d;
    }
`

//Sign Up Elements
export const SignUp = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:auto;
    border:1px solid black;
    height:40px;
    align-self: center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const SignBtn = styled(LinkR)`
    color:black; //Design
    font-size:14px;
    margin: 0 15px;
    text-decoration:none;
    cursor:pointer;
    /* transition: color 0.3s;

    &:hover{
        color:#ffffff;
    } */
    
`

export const MobileIcon = styled.div`
    display:none;
    justify-content: center;
    align-items: center;
    font-size:32px;
    cursor:pointer;

    @media screen and (max-width:768px){
        display:flex;
    }
`