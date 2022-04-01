import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../components/Themes'

import Socials from '../subComponents/Socials';
import Email from '../subComponents/Email';
import Particle from '../subComponents/Particle';

import heron from '../assets/Images/heron.png'
import { keyframes } from 'styled-components';
import { Jobs } from '../data/JobsData';
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const fly = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`

const Heron = styled.div`
    position: absolute;
    top: 15%;
    right: 10%;
    width: 20vw;
    animation: ${fly} 4s ease infinite;
    img {
        width: 100%;
        height: auto;
    }
`

const StyledJobsSection = styled.section`
  max-width: 700px;
  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 20px 2px;
  border-left: 2px solid '#ffffff';
  background-color: transparent;
  border-color: transparent;
  color: ${({ isActive }) => (isActive ? '#a87f63' : '#32261e')};
  /* font-family: var(--font-mono);
  font-size: var(--fz-xs); */
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid #a87f63;
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: #eee5e0;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 40px;
  background: #a87f63;
  transform: translateY(calc(${({ activeTabId }) => activeTabId-1} * 40px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  ul.pretty-list {
     list-style: none;
    li {
       position: relative;
       margin-bottom: 10px;
       padding-left: 30px;

       &:before {
         content: '▸';
         color: #a87f63;
         position: absolute;
         left: 0;
         font-size: 30px;
         line-height: 12px;
       }
     }
   }
  h3 {
    margin-bottom: 2px;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.3;
    .company {
      color: #a87f63;
    }
    .inline-link {
    position: relative;
    text-decoration: none;
    color: #a87f63;
        :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #a87f63;
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
        }
        :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
        }
    }
  }
  .range {
    margin-bottom: 25px;
    color: #595959;
  }
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  /* color: black; */
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: calc(0.6rem + 1vw); */
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  /* font-family: 'Ubuntu Mono', monospace; */
  /* font-style: italic; */
`


const Experience = () => {
    const [activeTabId, setActiveTabId] = useState();
    const tabs = useRef([]);
    const revealContainer = useRef(null);


  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
      <Socials/>
      <Email/>
      <Particle theme='dark'/>
      <Heron>
          <img src={heron} alt="heron" />
      </Heron>
      <Main>
      <StyledJobsSection id="jobs" ref={revealContainer}>

      <div className="inner">

      <StyledTabList role="tablist" aria-label="Job tabs">
      {Jobs &&
            Jobs.map((jobsData) => {
              return (
                <StyledTabButton
                  key={jobsData.id}
                  isActive={activeTabId === jobsData.id}
                  onClick={() => setActiveTabId(jobsData.id)}
                  ref={el => (tabs.current[jobsData.id] = el)}
                  id={`tab-${jobsData.id}`}
                  role="tab"
                  tabIndex={activeTabId === jobsData.id ? '-1' : '0'}
                  aria-selected={activeTabId === jobsData.id ? true : false}
                  aria-controls={`panel-${jobsData.id}`}>
                  <span>{jobsData.company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />

      </StyledTabList>

      <StyledTabPanels>
        {Jobs &&
            Jobs.map((jobsData) => {
              return (
                <CSSTransition key={jobsData.id} in={activeTabId === jobsData.id} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${jobsData.id}`}
                    role="tabpanel"
                    tabIndex={activeTabId === jobsData.id ? '0' : '-1'}
                    aria-labelledby={`tab-${jobsData.id}`}
                    aria-hidden={activeTabId !== jobsData.id}
                    hidden={activeTabId !== jobsData.id}>
                    <h3>
                      <span>{jobsData.title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={jobsData.url} className="inline-link">
                            {jobsData.company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{jobsData.range}</p>
                    <ul className="pretty-list" >
                        {jobsData && jobsData.description.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>

                    <div dangerouslySetInnerHTML={{ __html: jobsData.html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>

      </div>
    </StyledJobsSection>
    </Main>
      <BigTitle text="EXPERIENCE" top="10%" left="5%" />
      </Box>

    </ThemeProvider>


  )
}

export default Experience