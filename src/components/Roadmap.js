import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Roadmap = () => {
  return (
    <Section>
        {/* Roadmap */}
    </Section>
  )
}

export default Roadmap