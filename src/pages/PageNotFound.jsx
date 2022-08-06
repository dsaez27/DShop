import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tablet } from '../helpers/responsive';

export const PageNotFound = () => {
	return (
		<Container>
			<Title>404</Title>
			<h2>Page not found</h2>
			<Button to='/'>
				Back to home
			</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 85vh;
	padding: 20px;
	gap: 20px;
	background-color: #f5f5f5;
	${tablet({ flexDirection: 'column', gap: '30px' })}
`;

const Title = styled.h1`
	font-size: 100px;
	${tablet({ marginBottom: '20px' })}
`;

const Button = styled(Link)`
	width: 200px;
	height: 50px;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	border-radius: 25px;
	text-decoration: none;
	text-align: center;

	&:hover {
		filter: brightness(0.9);
	}
`;
