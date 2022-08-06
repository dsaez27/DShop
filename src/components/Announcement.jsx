import React from 'react';
import styled from 'styled-components';

export const Announcement = () => {
	return (
		<>
			<Container>
				<div>Super Deal! Free Shipping on Orders Over $50</div>
			</Container>
		</>
	);
};

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
`;