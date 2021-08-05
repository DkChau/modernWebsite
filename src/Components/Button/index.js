import React from 'react'
import {
    ButtonContainer,
    ButtonText
} from './ButtonElements'

const Button = (props) => {
    return (
        <ButtonContainer>
            <ButtonText>{props.text}</ButtonText>
        </ButtonContainer>
    )
}

export default Button
