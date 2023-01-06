import { useLocation, Navigate, Outlet } from "react-router-dom";


export const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : user?.user ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
