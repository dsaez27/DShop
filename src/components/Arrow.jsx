import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from '../Assets/ImagesSVG';

export const Arrow = ({ direction }) => {
	return (
		<ArrowContainer direction={direction}>{direction === 'left' ? <ArrowLeft /> : <ArrowRight />}</ArrowContainer>
	);
};

const ArrowContainer = styled.div`
	width: 50px;
	height: 50px;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	opacity: 0.5;
	z-index: 2;

	&:hover {
		opacity: 1;
	}
`;
