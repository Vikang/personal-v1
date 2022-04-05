import DrawSvg from "../subComponents/DrawSvg";
import  gsap from 'gsap';
import React, { useLayoutEffect, useRef } from "react";
import styled from 'styled-components'
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  padding-top: 200px;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Title = styled.h1`
  font-size: calc(4rem + 4vw);
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

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
      text-align: left;
        p {
          border-radius: 0 40px 0 40px;

        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;

  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: #f1e6da;
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: 30px;
  text-transform: capitalize;
  color: #a87f6e;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Date = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: black;

  font-weight: 600;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  color: black;

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, date, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Date>{date}</Date>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section id="roadmap">   
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Learning the Basics"
            date="September 2015-June 2016"
            subtext="Learned my first computing language, Java, during my Intro to Computer Science course in High School."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Diving Deeper: College Courses"
            date="August 2018-2021"
            subtext="Exposed to and learned a variety of computer science related areas. College Courses: Algorithms, Databases, Cloud Computing"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Getting the Full (Stack) Picture"
            date="August 2020 - November 2020"
            subtext="Created my first full-stack project built with NodeJS and mySQL. Also where I had gained first hand experience on a sprint based project."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="How it Started"
            date="October 2020-December 2020 "
            subtext="My first job as a software developer. Was hired by my sororiy to perform a complete overhaul on the chapter's website. Gained more expereince on implementing animations and UI/UX design using CSS and HTML"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Open for Business!"
            date="December 2021 - Now"
            subtext="I am focused on creating specialized websites for clients- fully curated to their needs and preferences. I do everything from designing the UI/UX on Figma to coding both the frontend and the backend of the project. Projects are all mobile compatible as well."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;