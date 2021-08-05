import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    NavContainer,
    LogoWrapper,
    Logo,
    NavLinks,
    LinkWrapper,
    Link,
    SignUp,
    SignBtn,
    MobileIcon
} from './NavBarElements'

const NavBar = (props) => {
    return (
        <NavContainer>
            <LogoWrapper>
                <Logo>DKC</Logo>
            </LogoWrapper>
            <NavLinks>
                <LinkWrapper>
                    <Link to='home' spy={true}>Home</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link to='about' spy={true}>About Us</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link to='careers' spy={true}>Careers</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link to='services' spy={true}>Services</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link to='learn' spy={true}>Learn More</Link>
                </LinkWrapper>
            </NavLinks>
            <SignUp>
                <SignBtn>Sign Up</SignBtn>
            </SignUp>
            <MobileIcon onClick={props.toggle}>
                <FaBars></FaBars>
            </MobileIcon>
        </NavContainer>
    )
}

export default NavBar
