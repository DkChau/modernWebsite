import React from 'react'
import {
    CardContainer,
    CardHeading,
    CardImage,
    CardLink,
    // ImageWrapper
} from './CardElements'

const Card = () => {
    return (
        <CardContainer>
            <CardImage src={require("../../Images/Team.svg").default}></CardImage>
            <CardHeading>Test</CardHeading>
            <CardLink>Learn more</CardLink>
        </CardContainer>
    )
}

export default Card
