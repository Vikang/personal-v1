import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const EmailBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    right: calc(2rem + 2vw);

    z-index: 3;

    /* &>*:not(:last-child) {
        margin: 0.5rem 0;
    } */
`

const Contact = styled(NavLink)`
    h5 {
    font-family:'Playfair Display', serif;
    font-weight: 100;
    letter-spacing: 0.3rem;

    }
    color: ${props => props.theme.text};
    position: absolute;
    right: -9.2rem;
    bottom: 8.5rem;
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 3;
`

const Line = styled(motion.span)`
    width: 3px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`

const Email = () => {
  return (
    <EmailBar>
        <Contact target="_blank" to={{pathname:"mailto:victoriawang98@gmail.com"}} >
          <motion.h5
            initial={{
                y: -200,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
            whileHover={{scale: 1.05, delay: 0, x: -25}}
            whileTap={{scale: 0.9}}
            >
                VICTORIAWANG98@GMAIL.COM

          </motion.h5>
        </Contact>
        <Line
            initial={
                {
                    height:0
                }
            }
            animate={{
                height: '8rem'
            }}
            transition={{
                type:'spring', duration:1, delay:0.8
            }}
        />
    </EmailBar>
  )
}

export default Email