import styled from 'styled-components'

export const InfoContainer = styled.div`
    width:80%;
    height:100vh;
    max-width: 1200px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:${({imgStart})=>(imgStart ? `'col1 col2'`: `'col2 col1'`)};
    justify-content:center;
    align-content: center;
    border-bottom: 3px solid #d9d9d9;
`
export const TextSubHeading=styled.h4`
    font-size:16px;
    font-weight: 300;
    color:#f2674d;
`
export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    grid-area: col1;
    width:100%;
    height:100%;
`
export const TextWrapper = styled.div`
    display:flex;
    width:auto;
    max-width:400px;
    text-align:justify;
    height:auto;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
`

export const TextHeader = styled.h2`
    color:black;
    padding:5px 0;
    font-size: 32px;
`

export const Text = styled.p`
    margin-top: 20px;
    color:black;
    font-family:'Open Sans';
`

export const ImageWrapper = styled.div`
    display:flex;
    justify-content: center;
    grid-area: col2;
    align-items: center;
`

export const Image = styled.img`
    width:100%;
    height:auto;
    max-height:300px;
`