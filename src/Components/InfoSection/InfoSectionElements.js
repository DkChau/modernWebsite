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
    font-size:1.1rem;
    font-family:'Open Sans';
`
export const ImageWrapper = styled.div`
    display:flex;
    justify-content: center;
    grid-area: picture;
`
export const Image = styled.img`
    width:29rem;
`
export const InfoContainer = styled.div`
    width:90%;
    height:100vh;
    max-width: 75rem;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:${({imgStart})=>(imgStart ? `'picture text'`: `'text picture'`)};
    border-bottom: 3px solid #d9d9d9;
    transition:0.3s ease-in-out;

    @media (max-width:1200px){
        ${TextSubHeading}{font-size:.98rem}
        ${TextHeader}{font-size:2rem}
        ${Text}{font-size:1.05rem}
        ${TextWrapper}{max-width:340px}
        ${Image}{width:26rem;}
    }
    @media (max-width:992px){
        grid-template-areas: 'picture' 'text';
        grid-template-columns: 1fr;
        grid-template-rows: 40% 40%;
        align-content: center;
        grid-gap:30px;

        ${TextSubHeading}{font-size:.96rem}
        ${TextHeader}{font-size:1.9rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:600px; height:100%; align-self:end;}
        ${Image}{height:80%; align-self:end;}
    }
    @media (max-width:768px){
        ${TextSubHeading}{font-size:.94rem}
        ${TextHeader}{font-size:1.8rem}
        ${Text}{font-size:.95rem}
        ${TextWrapper}{max-width:500px}
        ${Image}{width:22rem;}
    }
    @media (max-width:576px){
        ${TextSubHeading}{font-size:.92rem}
        ${TextHeader}{font-size:1.7rem}
        ${Text}{font-size:.9rem}
        ${TextWrapper}{max-width:460px}
        ${Image}{ width:21rem; } 
    }
`