import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

import { useComponentVisible } from '../../hooks/useComponentVisible';
import HeartIcon from '../../assets/heart.png';
import CartIcon from '../../assets/cart.png';
import { Dropdown } from './Dropdown';

export const Right = () => {
	const { uid } = useAuth();
	const { user } = useSelector(state => state.auth);
	const { items } = useSelector(state => state.cart);

	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();

	return (
		<>
			{uid ? (
				<>
					<Account ref={ref}>
						<Ul>
							<Li>
								<ProfileImage
									src={user.photoUrl}
									alt='user'
									onClick={() => setIsComponentVisible(!isComponentVisible)}
								/>
								<Dropdown isOpen={isComponentVisible} user={user} />
							</Li>
						</Ul>
					</Account>
					<Heart to='/wishlist'>
						<img src={HeartIcon} loading='lazy' alt='heart' />
					</Heart>
				</>
			) : (
				<Login to='/login'>Login</Login>
			)}

			<Cart to='/cart' data-cart-count={items.length}>
				<img src={CartIcon} alt='cart' />
			</Cart>
		</>
	);
};

const Account = styled.div``;

const Ul = styled.ul`
	list-style: none;
`;

const Li = styled.li`
	&:hover {
		color: #cefffc;
	}
`;

const Login = styled(Link)`
	font-size: 14px;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
	color: #000;

	&:hover {
		text-decoration: underline;
	}
`;

const Cart = styled(Link)`
	display: flex;

	img {
		width: 24px;
		height: 24px;
	}

	&[data-cart-count] {
		&:after {
			content: attr(data-cart-count);
			background: red;
			color: #fff;
			border-radius: 50%;
			font-size: 11px;
			width: 0.8rem;
			height: 0.8rem;
			text-align: center;
			font-weight: bold;
			transform: translate(-0.25rem, -0.25rem);
		}
	}
`;

const Heart = styled(Link)`
	width: 24px;
	height: 24px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const ProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
`;
