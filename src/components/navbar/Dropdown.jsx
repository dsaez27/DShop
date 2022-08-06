import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tablet } from '../../helpers/responsive';

export const Dropdown = ({ isOpen, user }) => {
	return (
		<>
			<Container isOpen={isOpen}>
				<Top>
					<Left>
						<img src={user.photoUrl} alt='user' loading='lazy' />
					</Left>
					<Right>
						<User>
							<Link to='/profile'>
								{user?.firstname} {user?.lastname}
							</Link>
						</User>
						<Email>{user?.email}</Email>
					</Right>
				</Top>
				<Hr />
				<Bottom>
					<Link to='/logout'>Logout</Link>
				</Bottom>
			</Container>
		</>
	);
};

const Container = styled.div`
	${({ isOpen }) =>
		isOpen
			? {
					display: 'flex',
					flexDirection: 'column',
			  }
			: {
					display: 'none',
			  }}
	position: absolute;
	z-index: 2;
	overflow: visible;
	width: 228px;
	margin: 0;
	padding: 8px;
	border: 1px solid color('mystic', 'gray');
	border-radius: var(--border-radius-small);
	background: #ffffff;
	box-shadow: 0 0 60px rgba(14, 42, 71, 0.25);
	top: 6rem;
	right: 2rem;

	@keyframes popover {
		0% {
			opacity: 0;
			transform: translateY(-30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	&:before {
		content: '';
		font-size: 1.4em;
		display: block;
		pointer-events: none;
		position: absolute;
		top: -10px;
		right: 5rem;
	}

	&:after {
		content: '';
		font-size: 1.4em;
		display: block;
		pointer-events: none;
		position: absolute;
		top: -10px;
		right: 5rem;
	}
`;

const Top = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	grid-column-gap: 0.5rem;
	padding: 0.5rem;
`;

const Left = styled.div`
	width: 30px;
	height: 30px;
	${tablet({ width: '40px', height: '40px' })};

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100%;
	${tablet({ width: '100%' })};
`;

const User = styled.h5`
	font-weight: bold;
	color: #000;

	a {
		color: #000;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Email = styled.p`
	font-size: var(--font-size-small);
	color: #000;
`;

const Hr = styled.hr`
	width: 70%;
	margin-inline-start: 0.5rem;
	border-color: var(--tertiary-color);
	margin-block: 0.25rem;
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	${tablet({ width: '100%' })};

	a {
		color: #000;
		text-decoration: none;
		font-size: var(--font-size-medium);
		&:hover {
			text-decoration: underline;
		}
	}
`;
