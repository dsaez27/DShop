import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWish, removeWish } from '../redux/actions/wishlist';
import styled from 'styled-components';
import Heart from 'react-heart';

export const Wish = ({ id, card }) => {
	const dispatch = useDispatch();
	const [wish, setWish] = useState(false);
	const { items } = useSelector(state => state.wishlist);

	useEffect(() => {
		items?.includes(id) && setWish(true);
	}, [items]);

	const handleWish = () => {
		if (wish) {
			dispatch(removeWish(id));
			setWish(false);
		} else {
			dispatch(addWish(id));
			setWish(true);
		}
	};

	return (
		<>
			<Container card={card}>
				<HeartButton isActive={wish} onClick={handleWish} />
			</Container>
		</>
	);
};

const Container = styled.div`
	width: 1.2rem;
	height: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
`;

const HeartButton = styled(Heart)`
	transition: all 0.5s ease;
`;
