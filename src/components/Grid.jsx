import React, { Suspense } from 'react';
import styled from 'styled-components';
import { TitlePage } from './TitlePage';

const Item = React.lazy(() => import('./Item'));

const Grid = props => {
	return (
		<Container>
			<TitlePage title={props.title ? props.title : 'Products'} position='left' />
			<Items>
				<Suspense fallback={<div>Loading...</div>}>
					<Item {...props} />
				</Suspense>
			</Items>
		</Container>
	);
};

const Container = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: #ebebeb;
	width: 100%;
	height: 100%;
	padding: 1rem;
`;

const Items = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	width: 100%;
	height: 100%;
	overflow: auto;
`;

export default Grid;
