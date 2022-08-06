import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';
import { tablet } from '../helpers/responsive';

export const Toggle = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Burger onClick={() => setOpen(!open)}>
				<Line open={open} />
				<Line open={open} />
				<Line open={open} />
			</Burger>

			<Menu open={open} setOpen={setOpen} />
		</>
	);
};

const Burger = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	z-index: 999;
	display: none;

	${tablet({
		display: 'flex',
		justifyContent: 'space-around',
		flexFlow: 'column nowrap',
	})}
`;

const Line = styled.div`
	width: 100%;
	height: 0.12rem;
	background: #000;
	transition: all 0.3s ease-in;
	position: relative;
	transform-origin: 1px;
	border-radius: 5px;

	&:nth-child(1) {
		transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
	}

	&:nth-child(2) {
		transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
		opacity: ${({ open }) => (open ? 0 : 1)};
	}

	&:nth-child(3) {
		transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
	}
`;
