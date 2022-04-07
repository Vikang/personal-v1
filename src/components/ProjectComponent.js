import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";


const BoxLink = styled.a`
    text-decoration: none;
`

const Box = styled(motion.li)`
/* width: calc(10rem + 10vw); */
width: 20rem;
text-decoration: none;
height: 20rem;
padding: 1rem;
background-color: #f1e6da;
/* backdrop-filter: blur(2px); */
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;
display: flex;
flex-direction: column;
position: relative;
z-index:5;
`

const Header = styled.div`
    margin: 1rem;
    display: inline;
    position: relative;
    padding: 10px;
    a {
        color: black;
    }
    svg {
        height: 22px;
        width: 22px;
    }
    .folder {
        color: #a87f6e;
    }

    .external {
        position: absolute;
        padding-top: 10px;
        right: 10px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        :hover {
            color: #a87f6e;
        }
    }
    .git {
        position: absolute;
        padding-top: 10px;
        right: 40px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        :hover {
            color: #a87f6e;
        }
    }

`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
text-transform: uppercase;
font-weight: 200;
margin: 0 1rem;
letter-spacing: 0.1em;
color: #000000;
transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
${Box}:hover &{
    color: #a87f6e;
}
`

const Description = styled.h2`
font-size: 15px;
font-family: 'Playfair Display', serif;
color: #737373;
font-weight: 200;
letter-spacing: 0.1em;
padding-top: 20px;
margin: 0 1rem;
`
const Tags = styled.div`
padding-top: 0.5rem;
font-family: 'Playfair Display', serif;
letter-spacing: 0.1em;
color: #8b8b8b;
display: flex;
flex-wrap: wrap;
`
const Tag = styled.span`
margin-right:1.3rem;
font-size:14px;
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
position: absolute;
bottom: 30px;
margin: 0 1rem;
`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const ProjectComponent = (props) => {

    const {id, name, description, tags, link, github} = props.project;

    return (
    <motion.div
        whileHover={{y:-10}}
        whileTap={{scale: 0.9}}
        >
        <BoxLink href={link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
        <Box key={id} variants={Item}>
            <Header>
                <FiFolder style = {{width:"40px", height: "40px"}} className="folder" />
                 <a href={link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <FiExternalLink className='external'/>
                 </a>
                 <a href={github} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <FiGithub className='git'/>
                 </a>
            </Header>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Footer>
                <Tags>
                {
                    tags.map((t,id) => {
                        return <Tag key={id}>{t}</Tag>
                    })
                }
                </Tags>
            </Footer>
        </Box>
        </BoxLink>
        </motion.div>
    )
}

export default ProjectComponent