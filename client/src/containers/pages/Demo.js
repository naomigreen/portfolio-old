import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import loadingSvg from "../../assets/images/loading.svg";
import BubbleChart from '../../components/charts/bubble/Bubble';
import { demo } from "../../components/text/Text";
import bubbleData from '../../components/data/gdp.json';
import barData from '../../components/data/games.json';

export default function Demo() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!bubbleData.length || !barData.length) {
      setLoading(true);
      return;
    } else {
      setLoading(false);
    }
  }, [barData])
  return (
    <Charts>
      <Loading
        loading={loading} src={loadingSvg} alt=''
        style={{ opacity: loading ? 1 : 0 }} style={{ opacity: loading ? 1 : 0 }}
      />
      <UpdatedReactMarkdown source={demo} escapeHtml={false} />
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

const Loading = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
  z-index: 3;
  background-repeat: no-repeat;
`;
