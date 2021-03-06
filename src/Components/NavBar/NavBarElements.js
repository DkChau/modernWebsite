import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SignUp = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:auto;
    border:1px solid black;
    height:50%;
    align-self: center;

    @media screen and (max-width:768px){
        display:none;
    }
    &:hover{
        background:#f8f7ef;
    }
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
    font-size:3rem;
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

export const SignBtn = styled(LinkR)`
    color:black; //Design
    margin: 0 15px;
    text-decoration:none;
    cursor:pointer;

`

export const MobileIcon = styled.div`
    display:none;
    justify-content: center;
    align-items: center;
    font-size:2rem;
    cursor:pointer;

    @media screen and (max-width:768px){
        display:flex;
    }
`

export const NavContainer = styled.div`
    width:100%;
    height:12.5%;
    margin: 0 auto;
    position:fixed;
    top:0; 
    padding: 0 8%;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    justify-content: center;
    align-content: center;
    font-family:'Open Sans';
    color:black;
    background: #ffffff;
    transition:0.3s ease-in-out;

    @media (max-width:992px){
        font-size: 0.9rem;

        h1{
            font-size:2rem;
        }

        ${SignUp}{
            font-size:.75rem;
        }

    }

    @media screen and (max-width:768px)
    {
        padding:0 10%;
        h1{
            font-size:2rem;
        }
    }
`