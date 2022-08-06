import React from 'react';
import { mobile } from '../../../helpers/responsive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { removeWish } from '../../../redux/actions/wishlist';
import Delete from '../../../assets/delete.png';

import { useDispatch } from 'react-redux';

const Product = ({ item: { id, image, name, price } }) => {
	const dispatch = useDispatch();

	return (
		<Container>
			<ProductDetail>
				<Link to={`/product/${id}`}>
					<Image src={image} alt={name} title={name} loading='lazy' />
				</Link>
				<Details>
					<ProductName>
						<ProductLink to={`/product/${id}`}>{name}</ProductLink>
					</ProductName>
				</Details>
			</ProductDetail>
			<Price>
				<ProductPrice>${price}</ProductPrice>
			</Price>
			<Stock>In Stock</Stock>
			<AddToCart>
				<AddToCartButton>Add to Cart</AddToCartButton>
			</AddToCart>
			<TrashSVG onClick={() => dispatch(removeWish(id))}>
				<img src={Delete} alt='Delete' />
			</TrashSVG>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	${mobile({ flexDirection: 'column', gap: '20px', padding: '20px' })};
	transition: all 0.5s ease;
`;

const ProductDetail = styled.div`
	flex: 4;
	display: flex;
	gap: 20px;
	${mobile({ flexDirection: 'column', gap: '20px', alignItems: 'center' })}
`;

const Image = styled.img`
	width: 150px;
	object-fit: cover;
	padding: 0.5rem;
`;

const Details = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
`;

const ProductName = styled.span`
	${mobile({ fontSize: '1.2rem', textAlign: 'center' })}
`;

const Price = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Stock = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductPrice = styled.span`
	font-size: 1.2rem;
	font-weight: 300;
`;

const AddToCart = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AddToCartButton = styled.button`
	background-color: #e6e6e6;
	border: none;
	border-radius: 25px;
	padding: 0.5rem;
	font-size: 0.8rem;
	font-weight: 400;
	color: #000;

	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: #000;
		color: #fff;
	}
`;

const ProductLink = styled(Link)`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin: 0.5rem;
	font-weight: 400;
	color: #000;
	font-size: 14px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const TrashSVG = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default React.memo(Product);
