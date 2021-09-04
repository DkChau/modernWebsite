import styled from 'styled-components';

export const TextSubHeading=styled.h4`
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
    height:auto;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
`

export const TextHeader = styled.h2`
    padding:5px 0;
    font-size: 2rem;
`

export const Text = styled.p`
    margin-top: 20px;
    font-family:'Open Sans';
`

export const LearnWrapper = styled.div`
    display:flex;
    width:100%;
    height:auto;
    grid-area:images;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;
    
`

export const SingleLearn = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin:20px 0px 50px 0;
    margin-right: 100px;
    padding:10px; */

`

export const LearnImage = styled.img`
    width:75px;
    height:auto;
    max-height: 75px;
    margin-bottom: 10px;
`

export const LearnSubHead = styled.h3`
    margin-bottom: 10px;
`

export const LearnDescription = styled.p`
    font-family: 'Open Sans';
    max-width:150px;
    text-align: center;
`
export const OuterButton = styled.div`
    display:flex;
`
export const InnerButton = styled.div`
    display:none;
`
export const LearnContainer = styled.div`
    display:flex;
    width:80%;
    height:100vh;
    max-width: 1200px;
    margin:0 auto;
    padding-top: 150px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color:black;

    @media (max-width:992px){
        display:grid;
        grid-template-rows: auto auto;
        grid-template-columns:1fr;
        grid-template-areas: 'images' 'text' 'button';
        justify-content: start;
        align-content: start;
        grid-gap: 60px;
        ${LearnImage}{}
        ${LearnSubHead}{font-size:1.1rem;}
        ${LearnDescription}{max-width:115px; font-size:.9rem;}
        ${TextSubHeading}{font-size:1.2rem}
        ${TextHeader}{font-size:2rem}
        ${Text}{font-size:1.2rem}
        ${TextWrapper}{max-width:600px}
        ${OuterButton}{display:none;}
        ${InnerButton}{display:flex;}
    }
    @media (max-width:768px){
        ${LearnImage}{max-width:65px; height:65px;}
        ${LearnSubHead}{font-size:.9rem;}
        ${LearnDescription}{max-width:100px; font-size:.8rem;}
        ${TextSubHeading}{font-size:1rem}
        ${TextHeader}{font-size:1.8rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:600px}
    }
    @media (max-width:576px){
        ${LearnImage}{max-width:50px; height:50px;}
        ${LearnSubHead}{font-size:.8rem;}
        ${LearnDescription}{display:none;}
        ${SingleLearn}{
            box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
            border-radius:15px;
            height:100px;
        }
        ${LearnWrapper}{
            display:grid;
            grid-template-rows:1fr 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            justify-content: center;
            align-content: center;
        }
        ${TextSubHeading}{font-size:.8rem}
        ${TextHeader}{font-size:1.6rem}
        ${Text}{font-size:.8rem}
        ${TextWrapper}{max-width:400px}
        grid-gap: 10px;
        padding-top:100px;
    }
`