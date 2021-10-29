import styled from 'styled-components'

export const TextSubHeading=styled.h4`
    color:#fc3f00;
`
export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    align-self:flex-start;
    grid-area: text;
    width:100%;
    height:100%;
`
export const TextWrapper = styled.div`
    display:flex;
    width:90%;
    max-width:400px;
    height:auto;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
`

export const TextHeader = styled.h2`
    color:black;
    padding:5px 0 0 0; 
    font-size: 2.1rem;
`

export const Text = styled.p`
    padding:20px 0;
    color:black;
    font-family:'Open Sans';
    font-size:1.1rem;
`
export const CardWrapper = styled.div`
    display:grid;
    width:auto;
    height:auto;
    grid-area: card;
    grid-template-columns: 12.5rem 12.5rem;
    grid-gap: 30px;
    grid-template-rows: 15rem 15rem;
    justify-content: center;
    align-content: center;
`
export const ServiceContainer = styled.div`
    width:80%;
    height:100vh;
    max-width: 75rem;
    margin: 0 auto;
    padding-top: 40px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:'card text';
    justify-content:center;
    align-content: center;
    border-bottom: 3px solid #d9d9d9;

    @media (max-width:1200px){
        ${CardWrapper}{
            grid-gap:7px;
        }
        ${TextSubHeading}{font-size:.98rem;}
        ${TextHeader}{font-size:2rem}
        ${Text}{font-size:1.05rem}
        ${TextWrapper}{max-width:340px}
    }
    @media (max-width:992px){
        ${CardWrapper}{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-bottom:40px;
            margin-left:0;
        }
        ${TextSubHeading}{font-size:.96rem}
        ${TextHeader}{font-size:1.9rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:800px}

        grid-template-rows:auto auto;
        grid-template-columns: 1fr;
        grid-template-areas:'card' 'text';
        justify-content: center;
        align-content: center;
        grid-gap: 20px;
    }
    @media (max-width:768px){
        ${TextSubHeading}{font-size:.94rem}
        ${TextHeader}{font-size:1.8rem}
        ${Text}{font-size:.95rem}
        ${TextWrapper}{max-width:700px}
        ${CardWrapper}{
            display:grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            align-content: center;
            margin:0 auto 20px auto;
        }
    }
    @media (max-width:576px){
        ${TextSubHeading}{font-size:.92rem}
        ${TextHeader}{font-size:1.7rem}
        ${Text}{font-size:.9rem}
        ${TextWrapper}{max-width:400px}
    }
`