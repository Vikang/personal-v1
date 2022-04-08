import React from 'react';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../components/Themes'

import Socials from '../subComponents/Socials';
import Email from '../subComponents/Email';
import Particle from '../subComponents/Particle';

import heron from '../assets/Images/heron.png'
import { keyframes } from 'styled-components';
import LabTabs from '../components/LabTabs';
import Navigation from '../components/Navigation';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding-top: 20%;
    height: 90vh;
  }
`

const fly = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`

const Heron = styled.div`
    position: absolute;
    top: 15%;
    right: 10%;
    width: 23vw;
    animation: ${fly} 4s ease infinite;
    img {
        width: 100%;
        height: auto;
    }

  @media (max-width: 1024px) {
    top: 16%;
    right: 5%;
    width: 30%;
  }
  @media (max-width: 480px) {
    top: 20%;
  }
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 40vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 20rem;

  @media (max-width: 1500px) {
    width: 65vw;
    height: 50vh;
  }

  @media (max-width: 1200px) {
    width: 65vw;
    height: 54vh;
  }

  @media (max-width: 1024px) {
    width: 65vw;
    height: 60vh;
    top: 15rem;
  }

  @media (max-width: 768px) {
    top: 15rem;
    width: 79vw;
    height: 60vh;
    left: 2rem;
  }

  @media (max-width: 600px) {
    top: 15rem;
    left: 10px;
    width: 79vw;
    height: 65vh;
  }

  @media (max-width: 480px) {
    left: 5px;
    width: 79vw;
    height: 60vh;
  }
`

const ExpTitle = styled.h1`
  position: absolute;
  font-size: calc(4rem + 4vw);
  text-transform: uppercase;
  letter-spacing: 0rem;
  color:${props => `rgba(${props.theme.textRgba},0.3)`};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 13%;
  left: 5%;
  padding: 1rem auto;
  width: fit-content;

  @media only screen and (max-width: 768px) {
    font-size: calc(3rem + 3vw);
  }
  @media (max-width: 480px) {
    font-size: calc(2.5rem + 2.5vw);
  }
`;


const Experience = () => {


  return (
    <ThemeProvider theme={DarkTheme}>
      <Navigation/>
      <Box>
      <Socials/>
      <Email/>
      <Particle theme='dark'/>
      <ExpTitle>EXPERIENCE</ExpTitle>
      <Heron>
          <img src={heron} alt="heron" />
      </Heron>
      <Main>
        <LabTabs/>
      </Main>
      {/* <BigTitle text="EXPERIENCE" top="10%" left="5%" /> */}
      </Box>

    </ThemeProvider>


  )
}

export default Experience