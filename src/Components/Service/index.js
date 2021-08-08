import React from 'react'
import {
    ServiceContainer,
    TextWrapper,
    TextHeader,
    Text,
    TextSubHeading,
    TextContainer,
    CardWrapper,
} from './ServiceElements'
import Card from '../Card'
import Button from '../Button'

const Service = () => {
    return (
        <ServiceContainer id='services'>
            <TextContainer>
                <TextWrapper>
                    <TextSubHeading>Services</TextSubHeading>
                    <TextHeader>What we can offer</TextHeader>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                    <Button text={'Get Started'}></Button>
                </TextWrapper>
            </TextContainer>
            <CardWrapper>
                    <Card loc={'Trophy'}></Card>
                    <Card loc={'Ribbon'}></Card>
                    <Card loc={'Graph'}></Card>
                    <Card loc={'Mail'}></Card>
            </CardWrapper>
        </ServiceContainer>
    )
}

export default Service
