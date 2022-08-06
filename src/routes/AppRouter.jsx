import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import { ScrollToTop } from '../hooks/useScrolltoTop';
import { StoreRoutes } from './StoreRoutes';

export const AppRouter = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route path='/*' element={<StoreRoutes />} />
				</Route>
			</Routes>
		</>
	);
};
