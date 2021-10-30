import styled from 'styled-components';

export const TextWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
`
export const TextTitle = styled.h1`
    font-size: 2.8rem;
    padding:10px 0 0 0;
`
export const TextDescription = styled.p`
    font-family:'Open Sans';
    padding:20px 0;
    font-size:1.1rem;
`
export const ImageWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`
export const HomeImage = styled.img`
    width:25rem;
    max-height:80%;
`

export const HomeContainer = styled.div`
    width:90%;
    max-width:75rem;
    height:100vh;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:0 auto;
    border-bottom: 3px solid #d9d9d9;
    transition:0.3s ease-in-out;

    @media screen and (max-width:1200px){
        ${TextTitle}{
            font-size:2.6rem;
        }
        ${TextDescription}{
            font-size:1rem;
        }
        ${HomeImage}{
            width:24rem;
        }
    }

    @media screen and (max-width:992px){
        padding-top: 6.25%;
        grid-template-columns: 1fr;
        grid-template-areas: 'picture' 'text';
        align-content: center;

        ${ImageWrapper}{
            grid-area:picture;
        }
        ${TextTitle}{
            font-size:2.5rem;
        }
        ${TextWrapper}{
            max-width:45rem;
            text-align: center;
            justify-self: center;
            grid-area:text;
        }
        ${HomeImage}{
            margin-left: 30px;
        }
    }

    @media screen and (max-width:768px){
        ${TextTitle}{
            font-size:2.4rem;
        }
        ${TextWrapper}{
            max-width:88%;
        }
        ${HomeImage}{

        }
    }
    @media screen and (max-width:576px){
        ${TextTitle}{
            font-size:2.2rem;
        }
        ${HomeImage}{
            width:19rem;
        }
    }
`