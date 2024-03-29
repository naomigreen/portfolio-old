import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { DataContext, useFetch } from '../../utils/hooks';
import BubbleChart from '../../components/charts/bubble/Bubble';
import BarChart from '../../components/charts/bar/Bar';
import { demo } from '../../data/workData';
import loading from '../../assets/images/loading.svg';

const Demo = () => {
  const gdpData = useFetch('/api/data/gdp', []);
  const houseData = useFetch('/api/data/houses', []);

  if (!houseData.length || !gdpData.length) {
    return <Loading src={loading} id='loading-icon' />;
  }
  return (
    <DataContext.Provider value={{ gdp: gdpData, houses: houseData }}>
      <Charts>
        <UpdatedReactMarkdown source={demo} escapeHtml={false} />
        <BarChart />
        <BubbleChart />
      </Charts>
    </DataContext.Provider>
  );
};

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
`;

const Loading = styled.img`
  margin: 0 auto;
  position: relative;
  display: block;
  width: 60px;
`;

export default Demo;
