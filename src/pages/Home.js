import React from 'react'
import styled from 'styled-components'
import Socials from '../subComponents/Socials'
import Email from '../subComponents/Email'
import { NavLink } from 'react-router-dom'
import Banner from '../components/Banner'
import { motion } from 'framer-motion'

const HomeContainer = styled.div`
  background: ${props => props.theme.body };
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,h3,h6 {
    font-family:'Playfair Display', serif;
    font-weight: 500;
    letter-spacing: 0.2rem;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(3rem + 2vw);
  text-decoration: none;
  z-index: 1;

`

const Work = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 35%;
  right: calc(0.5rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    right: calc(0.5rem + 1vw);
    top: 40%;
  }
  @media only screen and (max-width: 480px) {
    right: calc(0.5rem - 2vw);
    top: 40%;
  }
`

const Experience = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 25%;
  left: -0.5rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    left: -3rem;
  }
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <Socials/>
        <Email/>
        <Contact target="_blank" to={{pathname:"mailto:victoriawang98@gmail.com"}} >
        <motion.h2
          initial={{
              y:-200,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}

          >
            SAY HI...
        </motion.h2>
        </Contact>

        <Work to="/work" >
        <motion.h2
          initial={{
              y:-200,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}

          >
            WORK
          </motion.h2>
        </Work>
        <Experience to="/experience" >
        <motion.h2
          initial={{
              y:-200,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}

          >
            EXPERIENCE
          </motion.h2>
        </Experience>
        <BottomBar>
          <About to="/about" >
          <motion.h2
            initial={{
                y:200,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
              whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              ABOUT
            </motion.h2>
          </About>

          <Skills to="/skills" >
          <motion.h2
            initial={{
                y:200,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
              whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              SKILLS
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      < Banner />
    </HomeContainer>
  )
}

export default Home
