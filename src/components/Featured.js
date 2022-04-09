import React, {useRef} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Featured } from '../data/FeaturedData'
import { DownArrow } from '../components/AllSvgs';
import { motion } from 'framer-motion'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const StyledProjectsGrid = styled.ul`
    ${props => props.theme.resetList};
    width: 80%;
    padding-top: 120px;
    padding-left: 18%;
    margin-left: auto;
    margin-right: auto;
  a {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 768px) {
    margin-left: -10%;
    margin-right: 10%;
    overflow: hidden;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 768px) {
    ${props => props.theme.boxShadow};
  }
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      /* margin-bottom: 70px; */
    }
    /* @media (max-width: 480px) {
      margin-bottom: 30px;
    }  */
  }
  &:nth-of-type(even) {
    .project-content {
      /* left: -10%; */
      @media (max-width: 1048px) {
        grid-column: 1 / 10;
        left: -10%;
      }
      @media (max-width: 768px) {
        grid-column: 2 / 11;
      }
    }
    .project-overline {
      @media (max-width: 468px) {
        width: 150%;
      }
    }
    .project-description {
      @media (max-width: 1048px) {
          width: 70%;
        }
    }
    .project-tech-list {
      @media (max-width: 768px) {
          width: 70%;
        }
    }
    .project-image {
      .img {
        @media (max-width: 1200px) {
          height: 13rem;
          width: 19rem;
        }
        @media (max-width: 1048px) {
          height: 13rem;
          width: 19rem;
        }
        @media (max-width: 768px) {
          height: 31rem;
          width: 40rem;
        }
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        height: 500px;
        width: 40rem;
      }
    }
  }
  &:nth-of-type(odd) {
    .project-image {
      .img {
        margin-left: 10%;
        @media (max-width: 1500px) {
          margin-left: -10%;
          /*
          margin-left: -15%; */
        }
        @media (max-width: 1200px) {
          margin-left: -5%;
          height: 13rem;
          width: 19rem;
          /*
          margin-left: -15%; */
        }
         @media (max-width: 1048px) {
          margin-left: -20%;
          height: 13rem;
          width: 19rem;
          /*
          margin-left: -15%; */
        }
        @media (max-width: 768px) {
          margin-left: 0%;
          height: 31rem;
          width: 40rem;
        }
      }
    }
    .project-content {
      right: 40%;
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1048px) {
        grid-column: 6 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 4 / -1;
        /* padding: 40px 40px 30px;
         */
        text-align: left;
        margin-left: 150px;
        display: flex;
        flex-direction: column;
        width: 230px;
      }
      @media (max-width: 468px) {
        grid-column: 4 / -1;
        width: 200px;
      }
      /* @media (max-width: 480px) {
        padding: 25px 25px 20px;
      } */
    }
    .project-title {
      @media (max-width: 768px) {
        width: 150%;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        height: 500px;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    /* @media (max-width: 1080px) {
      grid-column: 1 / 9;
    } */
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    /* @media (max-width: 480px) {
      padding: 30px 25px 20px;
    } */
  }
  .project-overline {
    margin: 10px 0;
    color: #a87f6e;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 400;
  }
  .project-title {
    color: #b7b7b7;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.1em;
    font-size: clamp(24px, 5vw, 28px);
    a {
        text-decoration: none;
        color: black;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        @media (max-width: 768px) {
          color: white;
        }
        &:hover{
            color: #a87f6e;
        }
    }
    /* @media (max-width: 768px) {
      a {
        position: static;
        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    } */
  }
  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border: 3px solid gray;
    box-shadow: 5px 10px black;
    background-color: #f1e6da;
    color: #444444;
    font-size: 16px;
    letter-spacing: 0.1em;
    /* width: 70%; */

    @media (max-width: 1200px) {
      width: 100%;
    }


    @media (max-width: 768px) {
      width: 130%;
      text-align: left;
      box-shadow: none;
      background-color: transparent;
      color: #f1e6da;
      border: none;
      padding: 20px 0;
      /* padding: 20px 0;


      &:hover {
        box-shadow: none;
      } */
    }
    a {
      ${props => props.theme.inlineLink};
    }
    strong {
      color: var(--white);
      font-weight: normal;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: #444444;
      font-family: var(--font-mono);
      font-size: 15px;
      letter-spacing: 0.1em;
      white-space: nowrap;
      @media (max-width: 768px) {
          color: #b7b7b7;
      }
    }
    /* @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    } */
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    a {
      ${props => props.theme.flexCenter};
      padding: 10px;
      a:hover {
        color: #a87f6e;
      }
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
          color: black;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          @media (max-width: 768px) {
            color: #b7b7b7;
          }
          :hover {
            color: #a87f6e;
          }
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    /* @media (max-width: 768px) {
      grid-column: 1 / -1;
      opacity: 0.25;
    } */
    a {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      /* vertical-align: middle; */
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
          @media (max-width: 768px) {
            filter: grayscale(100%) contrast(1) brightness(20%);
          }
        }
      }
    }
    .img {
      border-radius: 10px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(65%);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 500px;
      height: auto;
        @media (max-width: 1200px) {
          height: 15rem;
          width: 25rem;
          /* margin-left: -15%; */
        }
      @media (max-width: 768px) {
        border-radius: 0px;
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(10%);
      }
    }
  }
`;

const ArrowContainer = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 5;
  top: 30px;

  h3 {
    font-weight: 200;
    padding-top: 15px;
    color: #a87f6e;
    text-transform: uppercase;
    font-size: 14px;
  }
`

const FeaturedSection = () => {

  const ref = useRef(null);

  const scrollToProjects = () => {

      let element = document.getElementById("projects");

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }

    return (
      <Section id="top">
          <StyledProjectsGrid>
        {Featured &&
          Featured.map((FeaturedData) => {

            return (
              <StyledProject key={Featured.id} >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Fea tured Project</p>

                    <h3 className="project-title">
                      <a href={FeaturedData.link}>{FeaturedData.title} </a>
                    </h3>

                    <div className="project-description">
                        { FeaturedData.description }
                    </div>

                    {FeaturedData.tags.length && (
                      <ul className="project-tech-list">
                        {FeaturedData.tags.map((tags, i) => (
                          <li key={i}>{tags}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {FeaturedData.github && (
                        <a href={FeaturedData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className="external">
                          <FiGithub/>
                        </a>
                      )}
                      {FeaturedData.link && (
                        <a href={FeaturedData.link} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="external">
                          <FiExternalLink/>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={FeaturedData.link ? FeaturedData.link : FeaturedData.github ? FeaturedData.github : '#'}>
                    <img src={FeaturedData.cover} alt={FeaturedData.title} className="img"/>
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
      <ArrowContainer>
            <NavLink style={{color:'white'}} to="#projects" >
                <motion.div
                    whileHover={{y:-5}}
                    whileTap={{scale: 0.9}}
                >
                <DownArrow height={80} width={40} fill = "currentColor" ref={ref}  onClick={() => scrollToProjects()}/>
                </motion.div>
            </NavLink>
            <h3>Other<br/>Projects</h3>
        </ArrowContainer>
      </Section>
    )
  }

  export default FeaturedSection