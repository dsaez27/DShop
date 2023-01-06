import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuth }) => {
    return !isAuth ? <Outlet /> : <Navigate replace to="/" />;
};

export default PublicRoutes;
