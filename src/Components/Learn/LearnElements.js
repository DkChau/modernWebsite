import styled from 'styled-components';

export const LearnContainer = styled.div`
    display:flex;
    width:80%;
    height:100vh;
    max-width: 1200px;
    margin:0 auto;
    padding-top: 150px;
    flex-direction: column;
    text-align:center;
    justify-content: flex-start;
    align-items: flex-start;
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
    margin-bottom:50px;
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

export const LearnWrapper = styled.div`
    display:flex;
    width:100%;
    height:auto;
    justify-content: space-between;
    align-items: center;
    
`

export const SingleLearn = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:20px 0px 50px 0;
    margin-right: 100px;
    padding:10px;

`

export const LearnImage = styled.img`
    width:125px;
    height:auto;
    max-height: 200px;
    margin-bottom: 10px;
`

export const LearnSubHead = styled.h3`
    color:black;
    margin-bottom: 10px;
`

export const LearnDescription = styled.p`
    color:black;
    font-family: 'Open Sans';
`