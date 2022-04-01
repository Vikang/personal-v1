import React from 'react'


import { ThemeProvider } from 'styled-components'
import { BeigeTheme } from '../components/Themes'
import Socials from '../subComponents/Socials';
import Email from '../subComponents/Email';

import AboutTop from '../components/AboutTop';
import Roadmap from '../components/Roadmap';

const About = () => {
  return (
    <ThemeProvider theme={BeigeTheme}>
      <AboutTop/>
      <Roadmap/>
      <Socials/>
      <Email/>
    </ThemeProvider>
  )
}

export default About