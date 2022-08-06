import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../helpers/responsive';

export const Search = () => {
	const [input, setInput] = useState('');

	let navigate = useNavigate();

	const handleChange = e => {
		e.preventDefault();
		navigate(`/products/${input}`);
	};

	return (
		<Container>
			<SearchContainer>
				<form onSubmit={handleChange}>
					<Input
						type='text'
						placeholder='Search'
						autoComplete='off'
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
				</form>
				<box-icon name='search' color='gray' />
			</SearchContainer>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 25px;
	padding: 0.5rem;
`;

const Input = styled.input`
	border: none;
	font-size: 12px;
	color: #000;
	${mobile({ fontSize: '10px', width: '100%' })}

	&:focus-visible {
		outline: none;
	}
`;
