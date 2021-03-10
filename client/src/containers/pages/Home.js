import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Image } from '../../components/Images/Images';
import { home } from '../../components/text/Text';

const Home = () => {
	return (
		<Intro>
			<Image
				src='https://naomi-assets.s3.eu-west-2.amazonaws.com/me.jpg'
				width='150px'
				radius='100%'
				padding='30px 0 10px'
			/>
			<Text source={home} escapeHtml={false} />
		</Intro>
	);
}

const Text = styled(ReactMarkdown)`
  padding: 20px;
  width: 500px;
  max-width: 90%;
  textAlign: center;
  margin: 0 auto;
  display: block;
`;
const Intro = styled.div`margin: 0 auto;`;

export default Home;