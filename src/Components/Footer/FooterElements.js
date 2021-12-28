import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width:80%;
    height:100%;
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:"logo content";
    align-content: center;

`
export const LogoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area:logo;
`
export const Logo = styled.p`
    font-size:4rem;
    padding-bottom: 1rem; 
`
export const ContentWrapper = styled.div`
    display:flex;
    grid-area:content;
`
export const LinkWrapper = styled.div`
    width:90%;
    max-width:700px;
    margin:0 auto;
    display:flex;
    justify-content:space-around;
`
export const LinkItem = styled.div`
    text-align:center;
    height:100%;
    display:flex;
    flex-direction: column;
`
export const Category = styled.p`
    color:#f2674d;
    font-size:1.5rem;
    padding: 0 0 10px 0;
    font-weight:600;
`
export const Link = styled.p`
    padding:3px 0;

    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }
`
export const SocialWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items: center;
`
export const Socials = styled.div`
    width:100%;
    max-width:400px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    font-size:2rem;
`
export const CreditWrapper = styled.div`
    padding:1rem;
`
export const CreditLink = styled.a`
    text-decoration:none;

    &:hover{
        text-decoration:underline;
    }

`
export const FooterContainer = styled.div`
    display:flex;
    width:100%;
    height:370px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top:7px solid #f2674d;
    background:#f8f7ef;
    transition:all 0.3s ease;

    @media (max-width:992px){
        ${FooterWrapper}{
            width:100%;
            grid-template-columns: 1fr;
            grid-template-rows: 3fr 1fr;
            grid-template-areas:    "content"
                                    "logo";
        }
        ${LogoWrapper}{
            flex-direction: column-reverse;
        }
        ${Logo}{
            font-size:2rem;
            /* padding: 20px 0; */
        }
        ${LinkWrapper}{
            align-self:center;
        }
    }
    @media (max-width:576px){
        ${Category}{
            font-size:1.05rem;
        }
        ${Link}{
            font-size:.80rem;
        }
        ${Socials}{
            max-width:300px;
        }
    }
`