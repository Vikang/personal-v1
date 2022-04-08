import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import MyLogo from '../assets/Images/loader.png'


const LogoContainer = styled.div`
    display: inline-block;

    position: fixed;
    left: 2.5rem;
    top: 2rem;
    z-index: 21;

    img {
      width: 70px;
      height: 70px;
      @media (max-width: 1080px) {
        width: 60px;
        height: 60px;
      }
    }

`

const Logo = () => {
  return (
    <LogoContainer >
        <NavLink to="/" >
        <img src={MyLogo} alt="My Logo"/>
        </NavLink>
    </LogoContainer>
  )
}

export default Logo