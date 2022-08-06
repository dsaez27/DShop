import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';
import { mobile } from '../helpers/responsive';

export const Register = () => {
	const dispatch = useDispatch();

	const [formRegisterValues, handleInputChange] = useForm({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { firstname, lastname, email, phone, password, confirmPassword } = formRegisterValues;

	const handleRegister = e => {
		e.preventDefault();
		dispatch(startRegister(firstname, lastname, email, phone, password, confirmPassword));
	};

	return (
		<Container>
			<Wrapper>
				<Title> CREATE AN ACCOUNT</Title>
				<Form onSubmit={handleRegister}>
					<Input
						type='text'
						placeholder='First Name'
						name='firstname'
						autoComplete='off'
						value={firstname}
						onChange={handleInputChange}
					/>
					<Input
						type='text'
						placeholder='Last Name'
						name='lastname'
						autoComplete='off'
						value={lastname}
						onChange={handleInputChange}
					/>
					<Input
						type='email'
						placeholder='Email'
						name='Email'
						autoComplete='off'
						value={email}
						onChange={handleInputChange}
					/>
					<Input
						type='text'
						placeholder='Phone'
						name='Phone'
						autoComplete='off'
						value={phone}
						onChange={handleInputChange}
					/>
					<Input
						type='password'
						placeholder='Password'
						name='Password'
						autoComplete='off'
						value={password}
						onChange={handleInputChange}
					/>
					<Input
						type='password'
						placeholder='Confirm Password'
						name='ConfirmPassword'
						autoComplete='off'
						value={confirmPassword}
						onChange={handleInputChange}
					/>
					<Agreement>
						By creating an account, I consent to the processing of my personal data in accordance with the
						<b> PRIVACY POLICY</b>
					</Agreement>
					<Button type='submit'>CREATE ACCOUNT</Button>
					<Login to='/login'>BACK TO LOGIN</Login>
				</Form>
			</Wrapper>
		</Container>
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
	width: min(400px, 90%);
	padding: 20px;
	border-radius: 10px;
	background-color: white;
	${mobile({ width: '90%' })};
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	${mobile({ flexDirection: 'column' })}
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

const Agreement = styled.span`
	font-size: 12px;
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
