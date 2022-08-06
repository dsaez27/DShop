import React, { memo } from 'react';
import styled from 'styled-components';

export const Size = memo(({ size, setSize }) => {
	return (
		<Container>
			<Title>Size: </Title>
			{['xs', 's', 'm', 'l', 'xl'].map((item, index) => (
				<FilterSizeOption key={index} onClick={() => setSize(item)} isSelect={size === item}>
					{item}
				</FilterSizeOption>
			))}
		</Container>
	);
});

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3px;
`;

const Title = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #828282;
`;

const FilterSizeOption = styled.button`
	background-color: ${({ isSelect }) => (isSelect ? 'teal' : '#fff')};
	color: ${({ isSelect }) => (isSelect ? 'white' : '#000')};
	font-size: 14px;
	font-weight: 400;

	outline: none;
	text-align: center;
	text-transform: uppercase;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid teal;
	transition: background-color 150ms ease;
`;
