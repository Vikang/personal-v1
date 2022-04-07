import React, {useRef} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { TypewriterText } from '../subComponents/TypewriterText';
import Me from '../assets/Images/me.jpg'
import { DownArrow } from '../components/AllSvgs';
import { motion } from 'framer-motion'

const Section = styled.section`
  /* min-height: ${props => `calc(100vh - ${props.theme.navHeight})` }; */
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Container = styled.div`
  width: 80%;
  min-height: 90vh;
  margin: 0 auto;
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 7%;
`

const Box2 = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-top: 8%;
    padding-left: 6%;
`

const ImgContainer = styled.img`
    width: 90%;
    height: auto;
    /* align-self: flex-start; */
    cursor: pointer;
`

const DetailsContainer = styled.div`
    width: 70%;
`

const Details1 = styled.h3`
    padding-top: 5%;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 140%;
    padding-bottom: 5%;
`

const Details2 = styled.h3`
    padding-top: 3%;
    line-height: 140%;
    font-weight: 200;
    letter-spacing: 0.19em;
`

const ArrowContainer = styled.span`
  position: relative;
  bottom: 20px;
  display: flex;
  justify-content: center;

  h3 {
    font-weight: 200;
    padding-top: 15px;
    color: #a87f6e;
    text-transform: uppercase;
    font-size: 14px;
  }
`

const AboutTop = () => {
    const ref = useRef(null);

    const scrollToRoadmap = () => {

        let element = document.getElementById("roadmap");

        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }

  return (
    <Section>
        <Container>
            <Box>
                <ImgContainer src={Me} alt="Victoria Wang" />
            </Box>
            <Box2>
            <TypewriterText/>
            <DetailsContainer>
            <Details1>My name is Victoria and I graduated from the <span style= {{color:"#a87f63"}}>University of Virginia</span> with a double major in Chemistry and Computer Science. </Details1>
            <br/>
            <Details2>My interest in software development began in 2013 after learning to create a custom music player for Tumblr blogs. Since then, I have had the privilege of creating my sorority chapter's website as well as working with healthcare companies to improve their EHR databases.</Details2>
            <br/>
            <Details2>I am constantly learning and expanding my skill set. In my free time, I enjoy participating in hackathons as well as experimenting with new technologies.</Details2>
            <br/>
            <Details2>Take a look at my technical works by checking out my <span href="/resume.pdf" style= {{color:"#a87f63"}} >resume</span>.</Details2>
            </DetailsContainer>
            </Box2>
        </Container>
        <ArrowContainer>
            <NavLink style={{color:'white'}} to="#roadmap" >
                <motion.div
                    whileHover={{y:-5}}
                    whileTap={{scale: 0.9}}
                >
                <DownArrow height={80} width={40} fill = "currentColor" ref={ref}  onClick={() => scrollToRoadmap()}/>
                </motion.div>
            </NavLink>
            <h3>My<br/>Journey</h3>
        </ArrowContainer>
    </Section>
  )
}

export default AboutTop