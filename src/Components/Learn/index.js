import React from 'react'
import Button from '../Button'
import {
    LearnContainer,
    LearnDescription,
    LearnHeading,
    LearnImage,
    LearnSubHead,
    LearnText,
    LearnWrapper,
    SingleLearn
} from './LearnElements'


//Learn more about our products
//Our product | our method | our values | etc
const Learn = () => {
    return (
        <LearnContainer id='learn'>
            <LearnHeading>Learn more</LearnHeading>
            <LearnText>See all we have to offer</LearnText>
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
            </LearnWrapper>
            <Button text={'Learn more'}></Button>
        </LearnContainer>
    )
}

export default Learn
