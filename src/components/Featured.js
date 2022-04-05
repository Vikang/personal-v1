import React from 'react'
import styled from 'styled-components'

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Featured } from '../data/FeaturedData'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const StyledProjectsGrid = styled.ul`
    ${props => props.theme.resetList};
    width: 90%;
    padding-left: 200px;
    padding-top: 120px;
    margin-left: auto;
    margin-right: auto;
  a {
    position: relative;
    z-index: 1;
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
    margin-bottom: 80px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(even) {
    .project-content {
        left: 25%;
    }
  }
  &:nth-of-type(odd) {

    .project-content {
      right: 15%;
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      .project-overline {
        position: relative;
        right: 35%;
      }
      .project-title {
        position: relative;
        right: 35%;
      }
      .project-tech-list {
        position: relative;
        right: 35%;
      }
      .project-links {
        position: relative;
        right: 35%;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
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
      position: relative;
      left: 300px;
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    color: #a87f6e;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;;
    font-size: 18px;
    font-weight: 400;
  }
  .project-title {
    color: #b7b7b7;
    text-transform: uppercase;
    font-weight: 500;
    font-size: clamp(24px, 5vw, 28px);
    a {
        text-decoration: none;
        color: black;
        &:hover{
            color: #a87f6e;
        }
    }
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: #ffffff;
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
    }
  }
  .project-description {
    position: relative;
    width: 500px;
    z-index: 2;
    padding: 30px;
    // border-radius: 4px;
    border: 3px solid gray;
    box-shadow: 5px 10px;
    background-color: #f1e6da;
    color: #000000;
    font-size: 16px;
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    a {
        ${props => props.theme.inlineLink};
    }
    strong {
      color: #ffffff;
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
      color: #000000;
      font-family: 'Playfair Display', serif;
      font-size: 15px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: #ffffff;
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color:  #ffffff;
    a {
        ${props => props.theme.flexCenter};
        
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
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
    width: auto;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border-radius: 4px;
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
    //   &:before {
    //     content: '';
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     z-index: 3;
    //     transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    //     background-color: #e1d8ce;
    //     mix-blend-mode: screen;
    //   }
    }
    .img {
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(65%);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const FeaturedSection = () => {
    return (
      <Section>
          <StyledProjectsGrid>
        {Featured &&
          Featured.map((FeaturedData) => {

            return (
              <StyledProject key={Featured.id} >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

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
                        <a href={FeaturedData.github} aria-label="GitHub Link">
                          <FiGithub color="black" />
                        </a>
                      )}
                      {FeaturedData.link && (
                        <a href={FeaturedData.link} aria-label="External Link" className="external">
                          <FiExternalLink color="black" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={FeaturedData.link ? FeaturedData.link : FeaturedData.github ? FeaturedData.github : '#'}>
                    <img src={FeaturedData.cover} alt={FeaturedData.title} className="img" width= "50%" height= "auto"/>
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
      </Section>
    )
  }
  
  export default FeaturedSection