import React, { useState } from 'react';
import { styled } from '@mui/system';
import style from 'styled-components';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import { Jobs } from '../data/JobsData';

const Tab = styled(TabUnstyled)`
  font-family: 'Playfair Display', serif;

  color: black;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 200;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 0px 0px;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-left: 1px solid #f1e6da;
  display: flex;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: #a87f63;
    color: white;
  }

  &:focus {
    background-color: #eee5e0;
    border-radius: 3px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #eee5e0;
    color: #a87f63;
  }

  @media (max-width: 600px) {
    border-left: transparent;
    width: 100px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 90px;
  }
`;

const StyledHighlight = style.div`
  position: absolute;
  top: 0;
  left: -2px;
  z-index: 10;
  width: 3px;
  height: 46px;
  background: #a87f63;
  transform: translateY(calc(${({ activeTabId }) => activeTabId-1} * 46px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 100px;
    height: 2px;
    margin-left: 51px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId-1} * 100px));
  }
  @media (max-width: 480px) {
    transform: translateX(calc(${({ activeTabId }) => activeTabId-1} * 90px));
    max-width: 90px;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
    position: relative;

    width: 100%;
    margin-left: 20px;
    width: 100%;
    height: auto;
    padding: 10px 5px;

    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 15px;
    }

    @media (max-width: 480px) {
      width: 85%;
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
    color: #444444;
    font-size: 15px;
    margin: 5px 0px;
  }

  ul.pretty-list {
    margin-top: 30px;
     list-style: none;
    li {
       position: relative;
       font-size: 18px;
       margin: 15px 0px;
       padding-left: 30px;

       @media (max-width: 1024px) {
          font-size: 17px;
       }

       @media (max-width: 600px) {
          font-size: 17px;
        }

        @media (max-width: 480px) {
          font-size: 15px;
        }

       &:before {
         content: '▸';
         color: #a87f63;
         position: absolute;
         left: 0;
         top: 4px;
         font-size: 24px;
         line-height: 12px;
       }
     }
   }
`;

const TabsList = styled(TabsListUnstyled)`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    margin-left: -50px;
  }
`;

const TabsSection = styled(TabsUnstyled)`
  position: absolute;
  top: 3rem;
  left: 2rem;
  right: 3rem;
  display: flex;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 400px;
  }
  @media (max-width: 480px) {
    left: 0.5rem;
  }
`

export default function LabTabs() {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <TabsSection defaultValue={0}>
      <TabsList>
      {Jobs &&
            Jobs.map((jobsData) => {
              return (
                <Tab
                onChange={() => setActiveTabId(jobsData.id)} >
                  {jobsData.company}
                </Tab>
              );
      })}
      <StyledHighlight activeTabId={activeTabId} />
      </TabsList>
      {Jobs &&
            Jobs.map((jobsData) => {
              return (
                <TabPanel value={jobsData.id-1}>
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
                </TabPanel>
              );
      })}
    </TabsSection>

  );
}
