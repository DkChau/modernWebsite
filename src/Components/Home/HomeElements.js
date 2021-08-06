import styled from 'styled-components';

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
`
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
    font-size: 60px;
    padding:30px 0 0 0;
`
export const TextDescription = styled.p`
    font-family:'Open Sans';
    color:black;
    font-size: 18px;
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
    width:500px;
    height:auto;
    max-height:700px;
`