import styled from 'styled-components'

export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    grid-area: text;
    width:100%;
    height:100%;
`
export const TextSubHeading=styled.h4`
    color:#f2674d;
    font-size:1.1rem;
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
    color:black;
    padding:5px 0;
    font-size: 2.1rem;
`

export const Text = styled.p`
    margin-top: 20px;
    color:black;
    font-size:1.1rem;
    font-family:'Open Sans';
`

export const ImageWrapper = styled.div`
    display:flex;
    justify-content: center;
    grid-area: picture;
    align-items: center;
`

export const Image = styled.img`
    width:485px;
    height:auto;
    max-height:300px;
`
export const InfoContainer = styled.div`
    width:80%;
    height:100vh;
    max-width: 1200px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:${({imgStart})=>(imgStart ? `'picture text'`: `'text picture'`)};
    justify-content:center;
    align-content: center;
    border-bottom: 3px solid #d9d9d9;

    @media (max-width:1200px){
        ${TextSubHeading}{font-size:1rem;}
        ${TextHeader}{font-size:2rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:340px}
        ${Image}{width:400px;}
    }
    @media (max-width:992px){
        grid-template-areas: 'picture' 'text';
        grid-template-columns: 1fr;
        grid-gap: 40px;

        ${TextSubHeading}{font-size:1.2rem}
        ${TextHeader}{font-size:2rem}
        ${Text}{font-size:1.2rem}
        ${TextWrapper}{max-width:600px}
        ${Image}{
            width:380px;
        }
    }
    @media (max-width:768px){
        ${TextSubHeading}{font-size:1rem}
        ${TextHeader}{font-size:1.8rem}
        ${Text}{font-size:1rem}
        ${TextWrapper}{max-width:600px}
        ${Image}{
            width:350px;
        }
    }
    @media (max-width:576px){
        ${TextSubHeading}{font-size:.8rem}
        ${TextHeader}{font-size:1.6rem}
        ${Text}{font-size:.8rem}
        ${TextWrapper}{max-width:400px}
        ${Image}{
            width:300px;
        }
    }
`