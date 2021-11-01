import styled from 'styled-components'

export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    grid-area: text;
`
export const TextWrapper = styled.div`
    display:flex;
    max-width:360px;
    flex-direction: column;
`
export const TextSubHeading=styled.h4`
    color:#f2674d;
`
export const TextHeader = styled.h2`
    color:black;
    padding:5px 0 0 0;
    font-size: 2.1rem;
`
export const Text = styled.p`
    padding:20px 0;
    color:black;
    font-size:1.2rem;
    font-family:'Open Sans';
`
export const CardWrapper = styled.div`
    display:grid;
    grid-area: card;
    grid-template-columns: 12.5rem 12.5rem;
    grid-gap: 30px;
    grid-template-rows: 15rem 15rem;
    justify-content: center;
    align-content: center;
`
export const ServiceContainer = styled.div`
    width:90%;
    height:100vh;
    max-width: 75rem;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:'card text';
    border-bottom: 3px solid #d9d9d9;

    @media (max-width:1200px){
        ${CardWrapper}{
            grid-gap:15px;
        }
        ${TextSubHeading}{font-size:.98rem}
        ${TextHeader}{font-size:2rem}
        ${Text}{font-size:1.15rem}
        ${TextWrapper}{max-width:340px}
    }
    @media (max-width:992px){
        ${CardWrapper}{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-bottom:50px;
            align-self:flex-end;
        }
        ${TextSubHeading}{font-size:.96rem}
        ${TextHeader}{font-size:1.9rem}
        ${Text}{font-size:1.1rem}
        ${TextWrapper}{max-width:600px; height:100%; align-self:end;}

        grid-template-rows:1fr 1fr;
        grid-template-columns: 1fr;
        grid-template-areas:'card' 'text';
        align-content: center;
    }
    @media (max-width:768px){

        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;

        ${TextSubHeading}{font-size:.94rem}
        ${TextHeader}{font-size:1.8rem}
        ${Text}{font-size:1.05rem}
        ${TextWrapper}{max-width:500px; padding-top:30px;}
        ${CardWrapper}{
            display:grid;
            align-self:end;
            width:100%;
            height:70%;
            grid-template-columns: 40% 40%;
            grid-template-rows: 1fr 1fr;
            grid-gap:0;
            margin:0;
        }
    }
    @media (max-width:576px){
        ${TextSubHeading}{font-size:.92rem}
        ${TextHeader}{font-size:1.7rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:88%}
    }
`