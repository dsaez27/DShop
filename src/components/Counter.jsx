import React, { memo } from 'react';
import styled from 'styled-components';

export const Counter = memo(({ counter, setCounter, total }) => {
	const handleCounter = op => {
		if (op === '+' && counter < total) {
			setCounter(counter + 1);
		}
		if (op === '-' && counter > 1) {
			setCounter(counter - 1);
		}
	};

	return (
		<Container>
			<Minus onClick={() => handleCounter('-')}>-</Minus>
			<Qty>{counter}</Qty>
			<Plus onClick={() => handleCounter('+')}>+</Plus>
		</Container>
	);
});

const Container = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
`;

const Qty = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
	cursor: default;
`;

const Minus = styled.span`
	font-weight: 700;
	font-size: 20px;
	color: #000;
`;

const Plus = styled.span`
	font-weight: 700;
	font-size: 20px;
	color: #000;
`;
