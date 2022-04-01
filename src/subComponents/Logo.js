import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import MyLogo from '../assets/Images/loader.png'


const LogoContainer = styled.div`
    display: inline-block;

    position: fixed;
    left: 2.5rem;
    top: 2rem;
    z-index: 3;

`

const Logo = () => {
  return (
    <LogoContainer >
        <NavLink to="/" >
        <img src={MyLogo} width="70px" height="70px" alt="My Logo"/>
        </NavLink>
    </LogoContainer>
  )
}

export default Logo