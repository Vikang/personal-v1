import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BeigeTheme } from '../components/Themes'
import Socials from '../subComponents/Socials';
import Email from '../subComponents/Email';

import FeaturedSection from '../components/Featured'
import Projects from '../components/Projects';
import Navigation from '../components/Navigation';


const Work = () => {
  return (
    <ThemeProvider theme={BeigeTheme}>
        <Navigation/>
        <Socials/>
        <Email/>
        <FeaturedSection/>
        <Projects/>
    </ThemeProvider>
  )
}

export default Work