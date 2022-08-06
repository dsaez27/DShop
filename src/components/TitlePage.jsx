import React from 'react';
import styled from 'styled-components';

export const TitlePage = ({ title, icon, position }) => {
	return (
		<>
			<Title position={position}>{title}</Title>
		</>
	);
};

const Title = styled.h1`
	font-weight: 200;
	text-align: ${props => props.position || 'center'};
	margin-bottom: 1rem;
`;
