import React from 'react'
import Button from '../Button'
import {
    LearnContainer,
    LearnDescription,
    Text,
    TextHeader,
    TextSubHeading,
    TextWrapper,
    LearnImage,
    LearnSubHead,
    LearnWrapper,
    SingleLearn,
    TextContainer
} from './LearnElements'


//Learn more about our products
//Our product | our method | our values | etc
const Learn = () => {
    return (
        <LearnContainer id='learn'>
            <TextContainer>
                <TextWrapper>
                    <TextSubHeading>Learn more</TextSubHeading>
                    <TextHeader>What makes us different</TextHeader>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                </TextWrapper>
            </TextContainer>
            <LearnWrapper>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Team.svg").default}></LearnImage>
                    <LearnSubHead>Testtt</LearnSubHead>
                    <LearnDescription>Testasda</LearnDescription>
                </SingleLearn>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Team.svg").default}></LearnImage>
                    <LearnSubHead>Testtt</LearnSubHead>
                    <LearnDescription>Testasda</LearnDescription>
                </SingleLearn>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Team.svg").default}></LearnImage>
                    <LearnSubHead>Testtt</LearnSubHead>
                    <LearnDescription>Testasda</LearnDescription>
                </SingleLearn>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Team.svg").default}></LearnImage>
                    <LearnSubHead>Testtt</LearnSubHead>
                    <LearnDescription>Testasda</LearnDescription>
                </SingleLearn>
            </LearnWrapper>
            <Button text={'Learn more'}></Button>
        </LearnContainer>
    )
}

export default Learn
