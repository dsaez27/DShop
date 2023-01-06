import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = ({ isAuth }) => {
    return isAuth ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectRoutes;
