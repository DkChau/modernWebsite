import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width:80%;
    height:100%;
    display:grid;
    grid-template-columns: 1fr 3fr;
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
    padding-bottom: 15px;
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
    margin:0 20px;
`
export const Category = styled.p`
    color:#f2674d;
    font-size:1.5rem;
    padding: 0 0 10px 0;
`
export const Link = styled.p`
    font-weight:300;
    padding:3px 0;
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

    @media (max-width:1200px){
        ${FooterWrapper}{
            grid-template-columns: 1fr 3fr;
        }
        ${Category}{
            font-size:1.2rem;
        }
        ${Link}{
        }
    }
    @media (max-width:992px){
        ${FooterWrapper}{
            grid-template-columns: 1fr;
            grid-template-rows: 3fr 1fr;
            grid-template-areas:    "content"
                                    "logo";
        }
        ${LogoWrapper}{
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
        ${Logo}{
            font-size:2rem;
            padding: 30px 0;
        }
        ${LinkWrapper}{
            padding-top:40px;
        }
    }
    @media (max-width:768px){
        ${FooterWrapper}{
            width:100%;
        }
        ${LinkWrapper}{
            max-width:80%;
            width:100%;
        }
    }
    @media (max-width:576px){
        ${Category}{
            font-size:1rem;
        }
        ${Link}{
            font-size:.75rem;
        }
        ${Socials}{
            max-width:300px;
        }
    }
`