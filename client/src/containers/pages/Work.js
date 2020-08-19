import React from "react";
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import { Image, LinkImage } from "../../components/images/Images";
import { sky, rolls, mon, clear, times } from "../../components/text/Text";
import desk from "../../assets/images/clear-desk.jpg";
import skyLogo from "../../assets/images/sky.png";
import monLogo from "../../assets/images/mon-logo.png";
import rollsLogo from "../../assets/images/rolls.png";
import clearLogo from "../../assets/images/clearmatics-logo.png";
import timesLogo from "../../assets/images/times.logo.white.png";

export default function Work() {
  return (
    <Intro>
      <Image src={desk} width="700px" maxWidth="95%" radius='5px' padding="30px 0" />
      <LinkImage src={skyLogo} width="200px" maxWidth="40%" link="https://www.skygroup.sky/our-company" />
      <Text source={sky} escapeHtml={false} />

      <LinkImage src={rollsLogo} width="250px" maxWidth="50%" link="https://www.rolls-royce.com/about.aspx" />
      <Text source={rolls} escapeHtml={false} />

      <LinkImage src={clearLogo} width="250px" maxWidth="50%" link="https://www.clearmatics.com/about/" />
      <Text source={clear} escapeHtml={false} />

      <LinkImage src={monLogo} width="250px" maxWidth="50%" link="https://monetate.com/about/" />
      <Text source={mon} escapeHtml={false} />

      <LinkImage src={timesLogo} width="250px" maxWidth="50%" link="https://www.news.co.uk/" />
      <Text source={times} escapeHtml={false} noBorder={true} />
    </Intro>
  );
}

const Text = styled(ReactMarkdown)`
  padding: 20px;
  width: 700px;
  margin: 0 auto;
  max-width: 90%;
  border-bottom: ${props => props.noBorder ? 0 : '1px solid #fff'};

  li{
    list-style-type: none;
  }
  ul{
    padding-left: 0;
  }
  @media(max-width: 425px){
    padding: 20px 0;
  }
`;

const Intro = styled.div`
  margin: 0 auto;
  width: 700px;
  max-width: 95%;
`;


