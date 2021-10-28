import styled from 'styled-components';

export const TextSubHeading=styled.h4`
    color:#f2674d;
    font-size:1.1rem;
`
export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:3.125rem;
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
    padding:5px 0 0 0;
    font-size: 2.1rem;
`

export const Text = styled.p`
    padding:20px 0;
    font-family:'Open Sans';
`

export const LearnWrapper = styled.div`
    display:flex;
    width:100%;
    margin-bottom:30px;
    height:auto;
    grid-area:images;
    justify-content: space-between;
    align-items: center;
    
`

export const SingleLearn = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const LearnImage = styled.img`
    height:4.8rem;
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
    max-width: 75rem;
    margin:0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color:black;

    @media (max-width:992px){
        display:grid;
        padding-top:6.25%;
        grid-template-rows: 1fr 1fr;
        grid-template-columns:1fr;
        grid-template-areas: 'images' 'text' 'button';
        ${LearnWrapper}{margin-bottom:0; align-self:center;}
        ${LearnImage}{height:3.9rem}
        ${LearnSubHead}{font-size:1.1rem;}
        ${LearnDescription}{max-width:115px; font-size:.9rem;}
        ${TextSubHeading}{font-size:1rem}
        ${TextHeader}{font-size:1.8rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:700px}
        ${OuterButton}{display:none;}
        ${InnerButton}{display:flex;}
    }
    @media (max-width:768px){
        ${LearnImage}{height:3.8rem;}
        ${LearnSubHead}{font-size:.9rem;}
        ${LearnDescription}{max-width:90px; font-size:.8rem;}
        ${TextSubHeading}{font-size:.9rem}
        ${TextHeader}{font-size:1.7rem}
        ${Text}{font-size:.85rem}
        ${TextWrapper}{max-width:600px}
    }
    @media (max-width:576px){
        padding-top:12.5%;
        ${LearnImage}{height:3.125rem;}
        ${LearnSubHead}{font-size:.8rem;}
        ${LearnDescription}{display:none;}
        ${SingleLearn}{
            box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
            border-radius:15px;
            height:6.25rem;
            width:95%;
            justify-self:center;
        }
        ${LearnWrapper}{
            display:grid;
            grid-template-rows:1fr 1fr;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-content: center;
            grid-gap:20px;
        }
        ${TextSubHeading}{font-size:.8rem}
        ${TextHeader}{font-size:1.6rem}
        ${Text}{font-size:.8rem}
        ${TextWrapper}{max-width:400px; justify-self:center;}
    }
`