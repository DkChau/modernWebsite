import styled from 'styled-components';

export const CardImage = styled.img`
    width:4.7rem;
`
export const CardHeading = styled.p`
    font-size: 1.4rem;
    padding:10px 0;
    font-weight:500;
`
export const CardLink = styled.p`
    font-family: 'Open Sans';
    font-weight:300;
`
export const CardContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
    width:13rem;
    border-radius: 20px;
    background-color: white;
    height:15rem;
    color:black;
    transition: 0.3s ease-in-out;
    justify-self:center;
    align-self:center;

    &:hover{
        background-color:#f5a8a0;
        color:black;
    }
    @media (max-width:1200px){
        width:12rem; 
        height:14rem;
        ${CardHeading}{font-size:1.35rem}
        ${CardLink}{font-size:.98rem;}
        ${CardImage}{width:4.5rem;}
    }
    @media (max-width:992px){
        width:9rem;
        height:12rem;
        margin:0 10px;
        ${CardHeading}{font-size:1.3rem}
        ${CardLink}{font-size:.96rem;}
        ${CardImage}{width:4.3rem;}
    }
    @media (max-width:768px){
        width:88%;
        height:76%;
        border-radius: 10px;
        justify-self:center;
        ${CardHeading}{font-size:1rem; padding:7px 0;}
        ${CardLink}{display:none;}
        ${CardImage}{height:50%;}
    }
`