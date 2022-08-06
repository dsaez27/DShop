import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../../components/Modal';
import { mobile } from '../../helpers/responsive';

export const ContentModal = ({ isOpen, setIsOpen, product, size, counter }) => {
	const { image, name, price, desc } = product;

	return (
		<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
			<Card>
				<ImageContainer>
					<Image src={image} loading='lazy' title={name} alt={name} />
				</ImageContainer>
				<InfoContainer>
					<Title>{name}</Title>
					<Desc>{desc}</Desc>
					<Price>
						<span>Price: </span>
						<WishContainer>${price * counter}</WishContainer>
					</Price>
					<FilterContainer>
						{/* <Filter>
                            <FilterTitle> Color:</FilterTitle>
                            <Color color={color} />
                        </Filter> */}
						<Filter>
							<FilterTitle>Size:</FilterTitle>
							<FilterSize>
								<FilterSizeOption>{size}</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<QtyContainer>Qty: {counter}</QtyContainer>
					<ButtonContainer>
						<Button to='/cart'>GO TO CART</Button>
						<Button>PROCEED TO CHECKOUT</Button>
					</ButtonContainer>
				</InfoContainer>
			</Card>
		</Modal>
	);
};

const Card = styled.div`
	background: #fff;
	display: flex;
	flex-direction: row;
	border-radius: 2rem;
	margin: 1rem;
	${mobile({ flexDirection: 'column', maxWidth: '90%' })}
`;

const ImageContainer = styled.div`
	background: peachpuff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2rem 0 0 2rem;
	${mobile({ maxWidth: '100%', borderRadius: '2rem 2rem 0 0' })}
`;

const Image = styled.img`
	width: 250px;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1rem;
	${mobile({ width: '100%', height: '100%' })}
`;

const Title = styled.h1`
	font-weight: bold;
`;

const Desc = styled.h3`
	font-weight: 400;
`;

const Price = styled.div`
	display: flex;
	flex-direction: column;

	span {
		font-weight: 400;
		font-size: 14px;
		color: #828282;
	}

	h5 {
		font-weight: 200;
		font-size: 24px;
	}
`;

const WishContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-items: center;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 0.5rem;
	${mobile({ width: '100%' })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const FilterTitle = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #828282;
`;

const Color = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${({ color }) => color};
	cursor: default;
`;

const FilterSize = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 3px;
`;

const FilterSizeOption = styled.button`
	background-color: teal;
	color: #fff;
	font-size: 14px;
	font-weight: 400;

	outline: none;
	text-align: center;
	text-transform: uppercase;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid teal;
	transition: background-color 150ms ease;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 1rem;
	${mobile({ width: '100%' })}
`;

const Button = styled.button`
	margin-block-start: 1rem;
	padding: 10px;
	border-radius: 25px;
	width: fit-content;
	border: 1px solid teal;
	background-color: white;
	font-weight: 500;
	text-decoration: none;

	&:hover {
		background-color: #f4f4f4;
	}
`;

const QtyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	font-weight: 400;
	font-size: 14px;
	color: #828282;
`;
