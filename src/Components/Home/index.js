import React from 'react'
import Button from '../Button'
import {
    HomeContainer,
    TextWrapper,
    TextDescription,
    TextTitle,
    ImageWrapper,
    HomeImage
} from './HomeElements'
const Home = () => {
    return (
        <HomeContainer id='home'>
            <TextWrapper>
                <TextTitle>Go above and beyond</TextTitle>
                <TextDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </TextDescription>
                <Button text={'Get started'}></Button>
            </TextWrapper>
            <ImageWrapper>
                <HomeImage src={require("../../Images/Rocket.svg").default}></HomeImage>
            </ImageWrapper>
        </HomeContainer>
    )
}

export default Home
