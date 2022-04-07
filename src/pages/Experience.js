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
import BigTitle from '../subComponents/BigTitle'
import Navigation from '../components/Navigation';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
    width: 20vw;
    animation: ${fly} 4s ease infinite;
    img {
        width: 100%;
        height: auto;
    }
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  /* color: black; */
  padding: 2rem;
  width: 50vw;
  height: 40vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: calc(0.6rem + 1vw); */
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 20rem;
`


const Experience = () => {


  return (
    <ThemeProvider theme={DarkTheme}>
      <Navigation/>
      <Box>
      <Socials/>
      <Email/>
      <Particle theme='dark'/>
      <Heron>
          <img src={heron} alt="heron" />
      </Heron>
      <Main>
        <LabTabs/>
      </Main>
      <BigTitle text="EXPERIENCE" top="10%" left="5%" />
      </Box>

    </ThemeProvider>


  )
}

export default Experience