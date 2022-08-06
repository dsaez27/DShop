import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TitlePage } from '../../components/TitlePage';
import ErrorBoundary from '../../components/ErrorBoundary';
import { Top } from './Top';
import { Summary } from './Summary';
import { tablet } from '../../helpers/responsive';
import { isEmpty } from '../../helpers/isEmpty';

const Product = React.lazy(() => import('./Product'));

export const Index = () => {
	const { items } = useSelector(state => state.cart);

	return (
		<>
			<Container>
				<TitlePage title='Your Bag' />
				<Top />
				<Bottom>
					<Info>
						<ErrorBoundary>
							{isEmpty(items) ? (
								<EmptyCart />
							) : (
								<Suspense fallback={<h1>Cargando...</h1>}>
									{items.map((item, index) => (
										<Product item={item} key={index} />
									))}
								</Suspense>
							)}
						</ErrorBoundary>
					</Info>
					<Summary />
				</Bottom>
			</Container>
		</>
	);
};

function EmptyCart() {
	return (
		<InfoEmpty>
			You have no items in your cart
			<InfoEmptyLink to='/products'>Go to products</InfoEmptyLink>
		</InfoEmpty>
	);
}

const Container = styled.div`
	padding: 2rem;
`;

const Bottom = styled.div`
	display: flex;
	gap: 1rem;

	${tablet({ flexDirection: 'column' })}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	transition: all 0.5s ease;
	width: 100%;
	height: 100%;
`;

const InfoEmpty = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 20px;
	transition: all 0.5s ease;
	font-size: 1.2rem;
	font-weight: 300;
`;

const InfoEmptyLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 1rem;
	font-weight: 300;
	transition: all 0.5s ease;
	width: fit-content;
	height: 100%;
	border-radius: 25px;
	background: #000;
	padding: 10px;

	&:hover {
		text-decoration: underline;
	}
`;
