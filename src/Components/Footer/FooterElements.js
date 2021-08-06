import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    width:100%;
    height:300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top:7px solid #f2674d;
    background:#f8f7ef;
`
export const InformationWrapper = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    width:80%;
    max-width: 1200px;
    height:auto;
    justify-content: center;
    align-content: center;
`
export const LogoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
`
export const Logo = styled.h1`
    color:#f2674d;
    font-size:45px;
    font-weight: 300;
    font-family: 'Open Sans';
`
export const LogoText = styled.p`
    color:black;
    font-family: 'Open Sans';
`
export const LinkWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:80%;
    max-width: 700px;
    margin:0 auto;
    height:auto;
`
export const LinkList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:auto;
    height:auto;
`
export const LinkTitle = styled.h2`
    color:#f2674d;
    
`
export const Link = styled.p`
    color:black;
    font-family: 'Open Sans';
    padding:2px 0;
`
export const Socials = styled.div`
    width:100%;
    height:auto;
    justify-content: center;
    align-items: center;
    display:flex;
`
export const SocialWrapper = styled.div`
    width:auto;
    height:auto;
    margin:0 auto;
    display:flex;
    font-size: 30px;
    margin-top: 30px;
    color:black;
    justify-content: center;
    align-items: center;
`
export const Item = styled.div`
    width:auto;
    height:auto;
    margin:20px;
`