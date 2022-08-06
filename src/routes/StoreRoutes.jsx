import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

import { Index as Product } from "../pages/Product/Index";
import { Index as Cart } from "../pages/Cart/Index";
import { Index as Checkout } from "../pages/Checkout";
import { Index as Profile } from "../pages/Account/Index";
import { Index as Wishlist } from "../pages/Account/Wishlist";
import { Index as Terms } from "../pages/Terms/Index";
import { Index as Search } from "../pages/Search/Index";
import { Index as Home } from "../pages/Home/Index";
import { Index as AboutUs } from "../pages/AboutUs/Index";
import { Success } from "../pages/Success";
import { PageNotFound } from "../pages/PageNotFound";

import { Login } from "../auth/Login";
import { PasswordReset } from "../auth/PasswordReset";
import { Register } from "../auth/Register";

import { useAuth } from "../hooks/useAuth";

export const StoreRoutes = () => {
  const { uid } = useAuth();

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="profile" element={<Profile />} />
      <Route path="success" element={<Success />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="terms" element={<Terms />} />
      <Route path="search" element={<Search />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="*" element={<PageNotFound />} />
      <Route element={uid ? <Navigate to="/" /> : <Outlet />}>
        <Route path="login" element={<Login />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
