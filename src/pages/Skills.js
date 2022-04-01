import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { BeigeTheme } from '../components/Themes'
import { FaLaptopCode, FaGlobe, FaTools, FaPalette } from "react-icons/fa";
import Socials from '../subComponents/Socials';
import Email from '../subComponents/Email';
import Particle from '../subComponents/Particle';
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid #a87f63;;
  color:  #a87f63;
  background-color:  ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  align-items: center;
  text-align: left;
  overflow: hidden;
  word-wrap: break-word;
  cursor: pointer;

  font-family: 'Libre Baskerville', serif;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* @media only screen and (max-width: 1300px) {
    font-size: 15px;
    width: auto;
    word-wrap: break-word;
  } */

  @media only screen and (max-width: 1300px) {
    font-size: 12px;
    width: 250px;
    word-wrap: break-word;
  }

  &:hover{
    color: ${props => props.theme.body};
    background-color: #a87f63;
}

  ul.pretty-list {
    padding: 0.5rem 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 200px));
    grid-gap: 0 10px;
    align-items: center;
    /* padding: 0; */
    margin: 0px 0 0 50px;
    overflow: hidden;
    list-style: none;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: repeat(2, minmax(50px, 200px));
      width: 250px;
      word-wrap: break-word;
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 30px;
      /* color: black; */
      /* font-family: var(--font-mono); */
      /* font-size: var(--fz-xs); */

      &:before {
        content: '▸';
        /* color: #a87f63; */
        position: absolute;
        left: 0;
        font-size: 30px;
        line-height: 12px;
      }
    }
  }
`

const Title = styled.h2`
  /* color: #a87f63; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);


${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Icons = styled.div`
  padding-right: 10px;
  padding-top: 5px;
`

const Items = styled.div`
  color: black
  ${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
`

const Skills = () => {
  const languages = ['JavaScript', 'HTML', 'React', 'CSS', 'Python', 'Java',  'SQL', 'R'];
  const frameworks = ['React', 'Node', 'Django', 'Tensorflow' ]
  const tools = ['Bash', 'Git & Github', 'Heroku', 'Gatsby', 'Docker', 'Flask','Travis-CI', 'Google Speech API', 'Cloud Natural Language API', 'OpenAI', 'Amazon Web Services']
  const designs = ['Adobe Illustrator','Adobe Photoshop','Figma', 'Procreate', 'Processing' ]

  return (
    <ThemeProvider theme={BeigeTheme}>
      {/* Languages, Frameworks, Tools, Design */}
      <Box>
      <Socials/>
      <Email/>
      <Particle theme='beige'/>
        <Main>
        <Title>
          <Icons>
            <FaGlobe width={40} height={40}/>
          </Icons>
            Languages
        </Title>
        <Items>
          <ul className="pretty-list">
            {languages && languages.map((language, i) => <li key={i}>{language}</li>)}
          </ul>
          </Items>
        <Title>
          <Icons>
          <FaLaptopCode width={40} height={40} />
          </Icons>

            Frameworks
        </Title>
        <ul className="pretty-list">
            {frameworks && frameworks.map((framework, i) => <li key={i}>{framework}</li>)}
        </ul>
        </Main>

        <Main>
          <Title>
            <Icons>
            <FaTools width={40} height={40}/>
            </Icons>
            Tools
          </Title>
        <ul className="pretty-list">
            {tools && tools.map((tool, i) => <li key={i}>{tool}</li>)}
        </ul>
          <Title>
            <Icons>
            <FaPalette width={40} height={40} />
            </Icons>
            Design
          </Title>
          <ul className="pretty-list">
            {designs && designs.map((design, i) => <li key={i}>{design}</li>)}
          </ul>
          <BigTitle text="SKILLS" top="82%" right="20%" />
        </Main>
      </Box>

    </ThemeProvider>


  )
}

export default Skills