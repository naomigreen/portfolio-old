import React from "react";
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import BubbleChart from '../../components/charts/bubble/Bubble';
import BarChart from '../../components/charts/bar/Bar';
import { demo } from "../../components/text/Text";
import bubbleData from '../../components/data/gdp.json';
import barData from '../../components/data/houses.json';

export default function Demo() {

  return (
    <Charts>
      <UpdatedReactMarkdown source={demo} escapeHtml={false} />
      <BarChart barData={barData} />
      <BubbleChart bubbleData={bubbleData} />
    </Charts>
  );
}

const UpdatedReactMarkdown = styled(ReactMarkdown)`
  margin-bottom: 30px;
`;

const Charts = styled.div`
  margin: 0 auto;

  a:link {
    color: #4fafc0;
  }
  
  a:visited {
    color: #359987;
  }
`
