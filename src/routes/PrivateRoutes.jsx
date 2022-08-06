import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated }) => {
    const { pathname } = useLocation();
    localStorage.setItem('lastPath', pathname);

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
