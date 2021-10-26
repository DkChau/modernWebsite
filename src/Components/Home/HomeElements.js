import styled from 'styled-components';

export const TextWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    max-width: 34.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    justify-self:center;
`
export const TextTitle = styled.h1`
    color:black;
    font-size: 2.8rem;
    padding:30px 0 0 0;
`
export const TextDescription = styled.p`
    font-family:'Open Sans';
    color:black;
    padding:20px 0;
    font-size:1.1rem;
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
            font-size:2.3rem;
        }
        ${TextWrapper}{
            max-width:33rem;;
        }
        ${TextDescription}{
            font-size:1rem;
        }
        ${HomeImage}{
            width:21rem;
            height:auto;
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
            width:100%;
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
            max-width:42rem;
            grid-area:text;
            margin:0 auto;
            width:100%;
        }
        ${HomeImage}{
            width:19rem;
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
            max-width:38.25rem;
            grid-area:text;
            margin:0 auto;
            width:100%;
        }
        ${TextDescription}{
            font-size:.85rem;
        }
        ${HomeImage}{
            width:18rem;
            height:auto;
            max-height:31.25rem;
        }
    }
`