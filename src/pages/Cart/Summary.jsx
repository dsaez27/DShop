import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Summary = () => {
	const { items } = useSelector(state => state.cart);

	const subTotal = 0;

	const shipping = items.length > 0 ? 0 : 10;

	const shippingDiscount = subTotal > 100 ? 0 : 10;

	const total = subTotal + shipping;

	return (
		<Container>
			<SummaryTitle>ORDER SUMMARY</SummaryTitle>
			<SummaryItem>
				<SummaryItemText>Subtotal</SummaryItemText>
				<SummaryItemPrice>${subTotal}</SummaryItemPrice>
			</SummaryItem>
			<SummaryItem>
				<SummaryItemText>Estimated Shipping</SummaryItemText>
				<SummaryItemPrice>${shipping}</SummaryItemPrice>
			</SummaryItem>
			<SummaryItem>
				<SummaryItemText>Shipping Discount</SummaryItemText>
				<SummaryItemPrice>${shippingDiscount}</SummaryItemPrice>
			</SummaryItem>
			<SummaryItem type='total'>
				<SummaryItemText>Total</SummaryItemText>
				<SummaryItemPrice>${total}</SummaryItemPrice>
			</SummaryItem>
			<Link to='/cart'>
				<Button type='submit'>CHECKOUT NOW</Button>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	border: 0.5px solid #e6e6e6;
	padding: 20px;
	height: 100%;
	max-width: 400px;
	width: 100%;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
	text-align: center;
`;

const SummaryItem = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${props => props.type === 'total' && '500'};
	font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	border-radius: 25px;
	padding: 10px;

	border: none;
	background-color: black;
	color: white;
	transition: all 0.3s ease-in-out;
`;
