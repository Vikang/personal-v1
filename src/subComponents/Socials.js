import React from 'react'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 3rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }
`

const Line = styled(motion.span)`
    width: 3px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`

const Socials = () => {
  return (
    <Icons>
        {/* Github */}
        <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
        >
            <NavLink style={{color:'white'}} target="_blank" to ={{pathname:"https://github.com/vikang"}}>
                <motion.div
                    whileHover={{scale: 1.1, y:-5}}
                    whileTap={{scale: 0.9}}
                >
                <Github width={35} height={35} fill = "currentColor" />
                </motion.div>
            </NavLink>
        </motion.div>

        {/* Twitter */}
        <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
        >
            <NavLink style={{color:'white'}} target="_blank" to ={{pathname:"https://twitter.com/vickywang01"}}>
            <motion.div
                    whileHover={{scale: 1.1, y:-5}}
                    whileTap={{scale: 0.9}}
            >
                <Twitter width={35} height={35} fill = "currentColor" />
            </motion.div>
            </NavLink>
        </motion.div>

        {/* Facebook */}
        <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
        >
            <NavLink style={{color:'white'}} target="_blank" to ={{pathname:"https://www.facebook.com/victoria.wang.7528"}}>
            <motion.div
                    whileHover={{scale: 1.1, y:-5}}
                    whileTap={{scale: 0.9}}
                >
                <Facebook width={35} height={35} fill = "currentColor" />
            </motion.div>
            </NavLink>
        </motion.div>

        {/* YouTube */}
        <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
        >
            <NavLink style={{color:'white'}} target="_blank" to ={{pathname:"https://youtube.com/channel/UCnRsv5PFfNJxB4G5mI6Oa7w"}}>
                <motion.div
                    whileHover={{scale: 1.1, y:-5}}
                    whileTap={{scale: 0.9}}
                >
                <YouTube width={35} height={35} fill = "currentColor" />
                </motion.div>
            </NavLink>
        </motion.div>
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
    </Icons>
  )
}

export default Socials