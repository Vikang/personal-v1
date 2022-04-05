import React from 'react'

import { ThemeProvider } from 'styled-components'
import { BeigeTheme } from '../components/Themes'
import Socials from '../subComponents/Socials';
import Email from '../subComponents/Email';

import FeaturedSection from '../components/Featured'

const Work = () => {
  return (
    <ThemeProvider theme={BeigeTheme}>
      <Socials/>
      <Email/>
      <FeaturedSection/>
    </ThemeProvider>
  )
}

export default Work