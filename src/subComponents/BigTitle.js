import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => `rgba(${props.theme.textRgba},0.3)`};
font-size: calc(4rem + 4vw);
letter-spacing: 0rem;
z-index:0;
@media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`


const BigTitle = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitle