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
    TextContainer,
    OuterButton,
    InnerButton
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
                    <InnerButton>
                        <Button text={'Learn more'}></Button>
                    </InnerButton>
                </TextWrapper>
            </TextContainer>
            <LearnWrapper>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Learn/Bulb.svg").default}></LearnImage>
                    <LearnSubHead>Values</LearnSubHead>
                    <LearnDescription>Lorem Ipsum is simply dummy text </LearnDescription>
                </SingleLearn>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Learn/Calendar.svg").default}></LearnImage>
                    <LearnSubHead>Values</LearnSubHead>
                    <LearnDescription>Lorem Ipsum is simply dummy text </LearnDescription>
                </SingleLearn>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Learn/Pencil.svg").default}></LearnImage>
                    <LearnSubHead>Values</LearnSubHead>
                    <LearnDescription>Lorem Ipsum is simply dummy text </LearnDescription>
                </SingleLearn>
                <SingleLearn>
                    <LearnImage src={require("../../Images/Learn/Board.svg").default}></LearnImage>
                    <LearnSubHead>Values</LearnSubHead>
                    <LearnDescription>Lorem Ipsum is simply dummy text </LearnDescription>
                </SingleLearn>
            </LearnWrapper>
            <OuterButton>
                <Button text={'Learn more'}></Button>
            </OuterButton>
        </LearnContainer>
    )
}

export default Learn
