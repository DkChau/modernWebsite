import styled from 'styled-components';

// export const ImageWrapper = styled.div`
//     width:auto;
//     height:90px;
//     background-color: white;
//     border-radius: 50px;
// `
export const CardImage = styled.img`
    width:75px;
    height:auto;
    max-height: 100px;
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
    width:200px;
    border-radius: 20px;
    background-color: white;
    height:240px;
    color:black;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:#f5a8a0;
        color:black;
    }
    @media (max-width:1200px){
        width:180px; 
        height:210px;
    }
    @media (max-width:992px){
        width:150px;
        height:190px;
        margin:0 10px;
        ${CardHeading}{}
        ${CardLink}{}
        ${CardImage}{}
    }
    @media (max-width:768px){
        width:200px;
        height:125px;
        margin:10px;
        border-radius: 10px;
        ${CardHeading}{font-size:1rem; padding:3px 0;}
        ${CardLink}{font-size:.9rem;}
        ${CardImage}{width:50px;}
    }
    @media (max-width:576px){
        width:125px;
        height:100px;
        ${CardHeading}{font-size:.9rem; padding:0}
        ${CardLink}{font-size:.8rem}
        ${CardImage}{width:50px;}
    }
`