import styled from 'styled-components';

export const TextWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const TextTitle = styled.h1`
    color:black;
    font-size: 50px;
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
    width:400px;
    height:auto;
    max-height:550px;
`

export const HomeContainer = styled.div`
    width:80%;
    max-width:1200px;
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
            font-size:42px;
        }
        ${TextWrapper}{
            max-width:400px;
            font-size:.9rem;
        }
        ${HomeImage}{
            width:350px;
            height:auto;
            max-height:500px;
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
            max-width:700px;
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
            width:250px;
            height:auto;
            max-height:400px;
        }
    }

    @media screen and (max-width:768px){
        /* grid-template-columns: 1fr;
        padding-top: 150px;
        grid-template-rows: auto 1fr;
        grid-template-areas: 'picture' 'text';
        justify-content: center;
        align-content: center;
        grid-gap: 0;; */

        ${TextTitle}{
            font-size:2.5rem;
        }
        ${TextWrapper}{
            max-width:500px;
            grid-area:text;
            font-size:.9rem;
            margin:0 auto;
            width:100%;
        }
        ${HomeImage}{
            width:250px;
            height:auto;
            max-height:500px;
        }
    }
    @media screen and (max-width:576px){
        padding-top: 15%;
        ${TextTitle}{
            font-size:2rem;
        }
        ${TextWrapper}{
            max-width:500px;
            grid-area:text;
            font-size:0.8rem;
            margin:0 auto;
            width:100%;
        }
        ${TextDescription}{
            padding:20px 0 0 0;
        }
        ${HomeImage}{
            width:200px;
            height:auto;
            max-height:500px;
        }
    }
`