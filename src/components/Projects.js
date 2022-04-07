import React, { useState } from 'react'
import styled from 'styled-components'

import { Project } from '../data/ProjectData'
import ProjectComponent from './ProjectComponent'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
  width: 100vw;
  padding-top: 150px;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Title = styled.h1`
  font-size: calc(3rem + 4vw);

  text-transform: uppercase;
  letter-spacing: 0rem;
  color:${props => `rgba(${props.theme.textRgba},0.3)`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  // border-bottom: 2px solid ${(props) => props.theme.text};
  padding: 1rem auto;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 4rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 20px;
  position: relative;
  margin-bottom: 30px;

  @media (max-width: 1080px) {
      grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
`

const ShowMoreButton = styled.button`
    font-size: 22px;
    letter-spacing: 0.2rem;
    background-color: transparent;
    color: #a87f63;
    border: 5px solid #a87f63;
    padding: 14px 40px;
    width: 250px;
    height: 75px;
    margin: 60px auto 60px;
    margin-left: 44%;

    @media (max-width: 1080px) {
        margin-left: calc(13.5rem + 4vw);
    }


    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      background-color: #f1e6da;
    }
`

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const GRID_LIMIT = 6;
  const firstSix = Project.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? Project : firstSix;

  return (
    <Section id="projects">


      <Title>Other Projects</Title>
      <Center>
        <Grid>
          {
            projectsToShow.map(project => {
                return <ProjectComponent key={project.id} project={project}/>
            })
          }
        </Grid>
        </Center>
        <ShowMoreButton className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
       </ShowMoreButton>
    </Section>
  )
}

export default Projects