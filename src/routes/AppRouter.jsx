import { Route, Routes } from "react-router-dom";
//Protect and public routes
import ProtectRoutes from "./ProtectRoutes";
import PublicRoutes from "./PublicRoutes";

import Layout from "@/components/layout/Layout";
import Product from "@/pages/product/Product";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notFound/NotFound";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import Wishlist from "@/pages/account/wishlist/Wishlist";
import Terms from "@/pages/terms/Terms";
import About from "@/pages/about/About";
import { Login } from "@/pages/auth/login/Login";
import { Register } from "@/pages/auth/register/Register";
import { Forgot } from "@/pages/auth/forgot/Forgot";
import { Reset } from "@/pages/auth/reset/Reset";
import { SearchPage } from "@/pages/searchPage/SearchPage";
import { useSelector } from "react-redux";
import { getAuth } from "@/features/user/userSlice";

export const AppRouter = () => {
    const auth = useSelector(getAuth);

    return (
        <Routes>
            <Route element={<Layout />}>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/:url" element={<Product />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<SearchPage />} />

                {/*Auth Routes*/}
                <Route element={<PublicRoutes isAuth={!!auth} />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot" element={<Forgot />} />
                    <Route path="/reset/:token" element={<Reset />} />
                </Route>

                {/* Protected routes */}
                <Route element={<ProtectRoutes isAuth={!!auth} />}>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Route>

                {/*404*/}
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
