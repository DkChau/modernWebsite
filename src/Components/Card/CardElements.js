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
    padding: 30px 0;
    max-height: 100px;
`

export const CardHeading = styled.p`
    font-size: 24px;
    padding:10px;
`

export const CardLink = styled.p`
    font-family: 'Open Sans';
    font-size:18px;
`
export const CardContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
    align-items: center;
    width:200px;
    border-radius: 20px;
    padding-top: 20px;;
    background-color: white;
    height:240px;
    color:black;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:#f2674d;
        color:white;
    }
    @media (max-width:1200px){
        width:180px; 
        height:220px;
    }
    @media (max-width:992px){}
    @media (max-width:768px){}
    @media (max-width:576px){}
`