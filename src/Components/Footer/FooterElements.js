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
export const FooterWrapper = styled.div`
    width:80%;
    height:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;

`
export const LogoWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.p`
    font-size:4rem;
`
export const ContentWrapper = styled.div`
    display:grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
`
export const LinkWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
`
export const LinkItem = styled.div`
    margin:0 20px;
`
export const Category = styled.p`
    color:green;
    font-size:1.5rem;
`
export const Link = styled.p`
    padding:2px 0;
`
export const SocialWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items: center;
`
export const Socials = styled.div`
    width:50%;
    max-width:400px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    font-size:2rem;
`