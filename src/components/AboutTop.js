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

  @media (max-width: 1080px) {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
  }
`

const Box = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 7%;
    padding-left: 100px;

  @media (max-width: 1080px) {
    padding-left: 0px;
  }
`

const Box2 = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    /* padding-left: 6%; */
    padding-bottom: 10%;

    @media (max-width: 2000px) {
        width: 80%;
        padding-top: 8%;
    }

    @media (max-width: 1080px) {
        width: 80%;
    }
`

const ImgContainer = styled.img`
    width: auto;
    height: 700px;
    /* align-self: flex-start; */
    cursor: pointer;
    top: 8rem;
    left: calc(15rem-8vw);
    position: absolute;

    @media (max-width: 1500px) {
      width: auto;
      height: 640px;
    }

    @media (max-width: 1080px) {
      top: 0rem;
      /* left: 2rem; */
      position: relative;
      width: auto;
      height: 670px;
    }

    @media (max-width: 768px) {
      top: 0rem;
      position: relative;
      width: auto;
      height: 500px;
  }

`

const DetailsContainer = styled.div`
    width: 60%;
    padding-right: 12rem;
    padding-left: 7rem;


    @media (max-width: 1500px) {
      padding-left: 8rem;
    }

    @media (max-width: 1080px) {
      width: 100%;
      padding-left: 0rem;
      display: flex;
      flex-direction: column;
      column-gap: 1rem;
  }
`

const Details1 = styled.h3`
    font-size: 1.2rem;
    padding-top: 5%;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 140%;
    padding-bottom: 5%;

    @media (max-width: 1500px) {
      font-size: 1rem;
      padding-bottom: 0%;
  }

    @media (max-width: 1080px) {
      font-size: 1rem;
      padding-bottom: 0%;
  }
`

const Details2 = styled.h3`
    font-size: 1.2rem;
    padding-top: 3%;
    line-height: 140%;
    font-weight: 200;
    letter-spacing: 0.19em;

    @media (max-width: 1500px) {
      font-size: 1rem;
      padding-bottom: 0%;
  }

    @media (max-width: 1080px) {
      font-size: 1rem;
  }
`

const ArrowContainer = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -7%;

  h3 {
    font-weight: 200;
    padding-top: 15px;
    color: #a87f6e;
    text-transform: uppercase;
    font-size: 14px;
  }

  @media (max-width: 1200px) {
      margin-top: -6%;
      z-index: 30;
  }

  @media (max-width: 1080px) {
      margin-top: -2%;
      z-index: 30;
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