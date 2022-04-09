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

    @media (max-width: 1400px) {
        width: 75vw;
    }

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

        @media (max-width: 1500px) {
            width: 110%;
        }

        @media (max-width: 1200px) {
            width: 110%;
        }

        @media (max-width: 1024px) {
            width: 120%;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: black;
    padding-top: 3rem;
    padding-right: 2rem;
    padding-bottom: 3rem;
    padding-left: 7rem;
    /* cursor: pointer; */

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (max-width: 1400px) {
        padding-left: 4rem;
    }

    @media (max-width: 1024px) {
        padding-left: 4rem;
    }
    @media (max-width: 768px) {
        text-align: center;
        padding-left: 2rem;
    }
    @media (max-width: 600px) {
        text-align: center;
        padding-left: 1rem;
        width: 130%;
    }
    @media (max-width: 480px) {
        padding-left: 2rem;
    }
`

const Subtitle = styled.h1`
    color: #a87f63;
    letter-spacing: 0.4rem;
    font-size: 22px;
    font-weight: 100;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
    @media (max-width: 480px) {
        margin-top: -5%;
        padding-bottom: 2%;
    }
`

const Name = styled.h1`
    line-height: 1em;
    font-size: 130px;
    font-weight: 200;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 1500px) {
        font-size: 120px;
    }

    @media screen and (max-width: 1200px) {
        width: 70%;
        font-size: 100px;
    }

    @media (max-width: 1024px) {
        font-size: 84px;
    }

    @media (max-width: 768px) {
        text-align: center;
        width: fit-content;
        padding-left: 10px;
        /* margin-top: -30px; */
    }

    @media (max-width: 600px) {
        font-size: 68px;
        text-align: center;
        width: fit-content;
        padding-left: 10px;
        margin-top: -30px;
    }
    @media (max-width: 480px) {
        font-size: 50px;
    }
`

const Details = styled.h1`
    padding-top: 30px;
    padding-bottom: 20px;
    line-height: 1.5em;
    letter-spacing: 0.3rem;
    font-size: 22px;
    font-weight: 100;

    @media screen and (max-width: 1500px) {
        width: 90%;
    }

    @media screen and (max-width: 1200px) {
        font-size: 18px;
        width: 90%;
    }
    @media (max-width: 1024px) {
        font-size: 16px;
        margin-top: -10px;
        width: 85%;
    }
    @media (max-width: 768px) {
        padding-left: 5%;
    }
    @media (max-width: 600px) {
        padding-left: 2%;
        width: 100%;
    }
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

    @media screen and (max-width: 1200px) {
        padding: 14px 40px;
        border: 3px solid #a87f63;
        width: 250px;
        height: 70px;
    }

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
                <img className="pic" src={ AnimeMe } alt = "Character"/>
            </motion.div>
        </SubBox2>
    </Box>
  )
}

export default Banner