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
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <Button text={'Get Started'}></Button>
                </TextWrapper>
            </TextContainer>
            <CardWrapper>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
            </CardWrapper>
        </ServiceContainer>
    )
}

export default Service
