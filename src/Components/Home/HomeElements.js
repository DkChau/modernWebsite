import styled from 'styled-components';

export const TextWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    max-width: 31.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    justify-self:center;
`
export const TextTitle = styled.h1`
    color:black;
    font-size: 3.125rem;
    padding:30px 0 0 0;
`
export const TextDescription = styled.p`
    font-family:'Open Sans';
    color:black;
    padding:30px 0;
`
export const ImageWrapper = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const HomeImage = styled.img`
    width:25rem;
    height:auto;
    max-height:53.125rem;
`

export const HomeContainer = styled.div`
    width:80%;
    max-width:75rem;
    height:100vh;
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    margin:0 auto;
    align-content: center;
    border-bottom: 3px solid #d9d9d9;
    transition:0.3s ease-in-out;

    @media screen and (max-width:1200px){
        ${TextTitle}{
            font-size:2.625rem;
        }
        ${TextWrapper}{
            max-width:400px;
            font-size:.9rem;
        }
        ${HomeImage}{
            width:25rem;
            height:auto;
            max-height:31.25rem;
        }
    }

    @media screen and (max-width:992px){
        grid-gap:20px;
        padding-top: 10%;
        grid-template-columns: 1fr;
        grid-template-areas: 'picture' 'text';
        justify-content: center;
        align-content: center;
        ${ImageWrapper}{
            grid-area:picture;
        }
        ${TextTitle}{
            font-size:2.5rem;
        }
        ${TextWrapper}{
            max-width:43.75rem;
            width:90%;
            font-size:1rem;
            text-align: center;
            justify-self: center;
            justify-content: center;
            align-items: center;
            grid-area:text;
        }
        ${HomeImage}{
            margin-left: 35px;
            width:20rem;
            height:auto;
            max-height:25rem;
        }
    }

    @media screen and (max-width:768px){
        ${TextTitle}{
            font-size:2.5rem;
        }
        ${TextWrapper}{
            max-width:470px;
            grid-area:text;
            font-size:.9rem;
            margin:0 auto;
            width:100%;
        }
        ${HomeImage}{
            width:20rem;
            height:auto;
            max-height:31.25rem;
        }
    }
    @media screen and (max-width:576px){
        padding-top: 15%;
        ${TextTitle}{
            font-size:2rem;
        }
        ${TextWrapper}{
            max-width:31.25rem;
            grid-area:text;
            font-size:.85rem;
            margin:0 auto;
            width:100%;
        }
        ${TextDescription}{
            padding:20px 0;
        }
        ${HomeImage}{
            width:19rem;
            height:auto;
            max-height:31.25rem;
        }
    }
`