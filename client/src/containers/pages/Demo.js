import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { DataContext, useFetch } from '../../components/utils/hooks';
import BubbleChart from '../../components/charts/bubble/Bubble';
import BarChart from '../../components/charts/bar/Bar';
import { demo } from '../../components/text/Text';

export default function Demo() {
	const gdpData = useFetch('/api/data/gdp', []);
	const houseData = useFetch('/api/data/houses', []);

	if (!houseData.length || !gdpData.length) {
		return null;
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
`;
