import React from 'react'
// import {FiCloud, FiDownloadCloud } from "react-icons/fi";
import styled from 'styled-components'
import {motion} from 'framer-motion'

import AnimeMe from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 75vh;
    display: flex;

    background:
        linear-gradient(
        to right,
        ${props => props.theme.text} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.text} 50%,
        ${props => props.theme.text} 50%) top;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    /* border-top: 2px solid white; */
    border-left: 2px solid white;
    border-right: 2px solid white;


    z-index: 1;

`

const SubBox = styled.div`
    width: 70%;
    position: relative;
    display: flex;
`

const SubBox2 = styled.div`
    width: 30%;
    position: relative;
    display: flex;

    .pic {
        position: absolute;
        bottom: 3px;
        left: 50%;
        transform: translate(-70%,0%);
        width: 82%;
        height: auto;
    }
`

const Text = styled.div`
    font-size: calc(1em _ 1.5vw);
    color: black;
    padding-top: 3rem;
    padding-right: 2rem;
    padding-bottom: 3rem;
    padding-left: 7rem;
    /* cursor: pointer; */

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Subtitle = styled.h1`
    color: #a87f63;
    letter-spacing: 0.4rem;
    font-size: 22px;
    font-weight: 100;
`

const Name = styled.h1`
    line-height: 1em;
    font-size: 130px;
    font-weight: 200;
    letter-spacing: 0.1rem;
`

const Details = styled.h1`
    padding-top: 30px;
    padding-bottom: 20px;
    line-height: 1.5em;
    letter-spacing: 0.3rem;
    font-size: 22px;
    font-weight: 100;
`

const ResumeBttn = styled.button`
    font-size: 22px;
    letter-spacing: 0.2rem;
    background-color: transparent;
    color: #a87f63;
    border: 5px solid #a87f63;
    padding: 14px 40px;
    width: 300px;
    height: 75px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    cursor: pointer;

`

const Banner = () => {

    function changeBackground(e) {
        e.target.style.background = '#f1e6da';
      }
    function changeBackground1(e) {
        e.target.style.background = 'transparent';
      }

  return (
    <Box
        initial={{height:0}}
        animate={{height: '75vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
    >
        <SubBox>
            <Text>
                <Subtitle>HI, MY NAME IS</Subtitle>
                <Name>VICTORIA WANG</Name>
                <Details>I AM A FULL-STACK <span style= {{color:"#a87f63"}}> SOFTWARE ENGINEER </span> SPECIALIZING IN CREATING BEAUTIFUL DIGITAL EXPERIENCES. <br/> EXPLORE MY PORTFOLIO TO LEARN MORE.</Details>
                <a href="/resume.pdf" target="_blank">
                <ResumeBttn onMouseOver={changeBackground} onMouseOut={changeBackground1}>
                    RESUME
                </ResumeBttn>
                </a>

            </Text>
        </SubBox>
        <SubBox2>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{ duration:1, delay:2 }} >
                <img className="pic" src={ AnimeMe } alt = "Anime Me"/>
            </motion.div>
        </SubBox2>
    </Box>
  )
}

export default Banner