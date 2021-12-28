import React from 'react'
import {
    CardContainer,
    CardHeading,
    CardImage,
    CardLink,
    // ImageWrapper
} from './CardElements'

const Card = (props) => {
    return (
        <CardContainer>
            <CardImage alt={props.description} src={require("../../Images/Services/"+props.loc+'.svg').default}></CardImage>
            <CardHeading>Test</CardHeading>
            <CardLink>Learn more</CardLink>
        </CardContainer>
    )
}

export default Card
