import styled from 'styled-components';

export const CardImage = styled.img`
    width:4.688rem;
    height:auto;
`

export const CardHeading = styled.p`
    font-size: 1.5rem;
    padding:10px 0;
`

export const CardLink = styled.p`
    font-family: 'Open Sans';
`
export const CardContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
    align-items: center;
    width:12.5rem;
    border-radius: 20px;
    background-color: white;
    height:15rem;
    color:black;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:#f5a8a0;
        color:black;
    }
    @media (max-width:1200px){
        width:11rem; 
        height:13rem;
    }
    @media (max-width:992px){
        width:10rem;
        height:13rem;
        margin:0 10px;
        ${CardHeading}{font-size:1.3rem}
        ${CardLink}{font-size:.9rem;}
        ${CardImage}{}
    }
    @media (max-width:768px){
        width:13.5rem;
        height:8rem;
        margin:10px;
        border-radius: 10px;
        ${CardHeading}{font-size:1rem; padding:3px 0;}
        ${CardLink}{font-size:.9rem;}
        ${CardImage}{width:3rem;}
    }
    @media (max-width:576px){
        width:10rem;
        height:7rem;
        ${CardHeading}{font-size:.9rem; padding:0}
        ${CardLink}{font-size:.8rem}
        ${CardImage}{width:2.8rem;}
    }
`