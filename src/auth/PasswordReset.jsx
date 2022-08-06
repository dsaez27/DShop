import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../helpers/responsive';

export const PasswordReset = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Title>Restore password</Title>
					<Form>
						<Input type='email' placeholder='Email' />
						<Button type='submit'>Reset</Button>
						<Login to='/login'>BACK TO LOGIN</Login>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

const Container = styled.div`
	width: min(100%, 100vw);
	height: 100vh;
	min-height: 450px;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://res.cloudinary.com/djv0cypxw/image/upload/v1657850487/Store/background/bg-01.jpg') no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: min(300px, 90%);
	padding: 20px;
	border-radius: 10px;
	background-color: white;
	${mobile({ width: '90%' })}
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: 10px;
`;

const Title = styled.h1`
	padding-bottom: 30px;
`;

const Input = styled.input`
	flex: 1;
	border-radius: 25px;
	border: 1px solid lightgray;
	min-width: 40%;
	padding: 10px;

	&:focus-visible {
		outline: none;
	}
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	border-radius: 25px;
`;

const Login = styled(Link)`
	font-size: 12px;

	color: teal;
	text-decoration: none;
	transition: all 0.5s ease-in-out;

	&:hover {
		color: teal;
		opacity: 0.7;
		text-decoration: underline;
	}
`;
