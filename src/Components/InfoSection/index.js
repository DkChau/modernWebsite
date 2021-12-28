import React from 'react'
import Button from '../Button'
import {
    InfoContainer,
    TextWrapper,
    TextHeader,
    Text,
    ImageWrapper,
    Image,
    TextSubHeading,
    TextContainer
} from './InfoSectionElements'

const InfoSection = (props) => {
    return (
        <InfoContainer imgStart={props.data.imgStart} id={props.data.id}>
            <TextContainer>
                <TextWrapper>
                    <TextSubHeading>{props.data.subhead}</TextSubHeading>
                    <TextHeader>{props.data.header}</TextHeader>
                    <Text>{props.data.text}</Text>
                    <Button text={props.data.btnText}></Button>
                </TextWrapper>
            </TextContainer>
            <ImageWrapper>
                <Image alt={props.data.imgDesc} src={props.data.src.default}></Image>
            </ImageWrapper>
        </InfoContainer>
    )
}

export default InfoSection
