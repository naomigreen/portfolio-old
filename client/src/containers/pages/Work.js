import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Image, LinkImage } from '../../components/images/Images';
import { sky, rolls, mon, clear, times, mars, hackney, bbc, intrepid, dazn } from '../../data/workData';
import {
  desk,
  skyLogo,
  monLogo,
  rollsLogo,
  timesLogo,
  hackneyLogo,
  marsLogo,
  clearLogo,
  bbcLogo,
  daznLogo,
  intrepidLogo,
} from '../../assets/images/index.js';

const Work = () => (
  <Intro>
    <Image src={desk} width='700px' maxWidth='95%' radius='5px' padding='30px 0' />
    <LinkImage src={bbcLogo} width='250px' maxWidth='50%' link='https://www.bbc.co.uk/aboutthebbc' />
    <Text source={bbc} escapeHtml={false} />
    <LinkImage src={daznLogo} width='250px' maxWidth='50%' link='https://dazngroup.com/about-us/' />
    <Text source={dazn} escapeHtml={false} />
    <LinkImage src={intrepidLogo} width='250px' maxWidth='50%' link='https://www.beintrepid.co.uk/' />
    <Text source={intrepid} escapeHtml={false} />
    <LinkImage src={hackneyLogo} width='250px' maxWidth='50%' link='https://hackney.gov.uk/' />
    <Text source={hackney} escapeHtml={false} />
    <LinkImage src={marsLogo} width='250px' maxWidth='50%' link='https://www.mars.com/about' />
    <Text source={mars} escapeHtml={false} />
    <LinkImage src={skyLogo} width='200px' maxWidth='40%' link='https://www.skygroup.sky/our-company' />
    <Text source={sky} escapeHtml={false} />
    <LinkImage src={rollsLogo} width='250px' maxWidth='50%' link='https://www.rolls-royce.com/about.aspx' />
    <Text source={rolls} escapeHtml={false} />
    <LinkImage src={clearLogo} width='250px' maxWidth='50%' link='https://www.clearmatics.com/about/' />
    <Text source={clear} escapeHtml={false} />
    <LinkImage src={monLogo} width='250px' maxWidth='50%' link='https://monetate.com/about/' />
    <Text source={mon} escapeHtml={false} />
    <LinkImage src={timesLogo} width='250px' maxWidth='50%' link='https://www.news.co.uk/what-we-do/' />
    <Text source={times} escapeHtml={false} noBorder={true} />
  </Intro>
);

const Text = styled(ReactMarkdown)`
  padding: 20px;
  width: 700px;
  margin: 0 auto;
  max-width: 95%;
  border-bottom: ${(props) => (props.noBorder ? 0 : '1px solid #fff')};

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
  @media (max-width: 425px) {
    padding: 20px 0;
  }
`;

const Intro = styled.div`
  margin: 0 auto;
  width: 700px;
  max-width: 95%;
`;

export default Work;
