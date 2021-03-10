import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Wrapper>
			<p>&copy; Codes Green Ltd </p>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	width: 100%;
	z-index: 3;
	text-align: center;
	color: #8fd49b;
	margin-top: 70px;
	padding-bottom: 40px;
`;

export default Footer;
