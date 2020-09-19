import React from 'react';
import styled from 'styled-components';
import Form from '../../components/form/Form';

export default function Contact() {
	return (
		<Layout>
			<Form />
		</Layout>
	);
}

const Layout = styled.div`
	width: 500px;
	max-width: 95%;
	margin: 0 auto;
`;
