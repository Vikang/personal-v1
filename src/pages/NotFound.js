import React from 'react'
import styled from 'styled-components'
import Socials from '../subComponents/Socials'
import Email from '../subComponents/Email'
import { NavLink } from 'react-router-dom'
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
  top: 2rem;
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
`

const Experience = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 25%;
  left: -0.5rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
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

const HomeBttn = styled.button`
    font-size: 22px;
    letter-spacing: 0.2rem;
    background-color: transparent;
    color: #a87f63;
    border: 5px solid #a87f63;
    padding: 14px 40px;
    width: 300px;
    height: 75px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: 100px;

    cursor: pointer;

    :hover {
        background-color: #f1e6da;
    }

    @media screen and (max-width: 768px) {
        margin-top: 100px;
        padding: 14px 40px;
        font-size: 18px;
        border: 3px solid #a87f63;
        width: 200px;
        height: 60px;
    }

`
const Header1 = styled.h1`
    margin-top: 100px;
    font-size: 200px;
    @media screen and (max-width: 768px) {
        font-size: 100px;
        margin-top: 200px;
    }

`
const Header2 = styled.h3`
    padding-top: 1rem;
`
const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 768px) {
        margin-top: auto;
        margin-bottom: auto;
    }
`

const NotFound = () => {
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
      <NotFoundContainer>
      <Header1>
          404
      </Header1>
      <Header2>
          Page Not Found
      </Header2>
      <a href="/">
        <HomeBttn>
            GO HOME
        </HomeBttn>
      </a>
      </NotFoundContainer>
    </HomeContainer>
  )
}

export default NotFound