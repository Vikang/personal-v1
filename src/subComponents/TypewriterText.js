import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 68px;
    position: inherit;
    left: 0;
    padding-top: 2%;
`

const Subtitle = styled.h2`
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 0.2em;
    left: 0;
    margin-left: 0%;
`

export const TypewriterText = () => {
  return (
      <>
    <Subtitle>
        I am a
    </Subtitle>
    <Title>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
        onInit={(typewriter) => {
            typewriter.typeString('Software Engineer')
            .pauseFor(2000)
            .deleteAll()
            typewriter.typeString('Digital Artist')
            .pauseFor(2000)
            .deleteAll()
            typewriter.typeString('Content Creator')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        />
    </Title>
    </>
  )
}
