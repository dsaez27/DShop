import { Login } from '../Auth/Login';
import { PasswordReset } from '../Auth/PasswordReset';
import { Register } from '../Auth/Register';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import { Product } from '../pages/Product';
import { Products } from '../pages/Products';
import { Profile } from '../pages/Profile';
import { Success } from '../pages/Success';
import { Terms } from '../pages/Terms';
import { Wishlist } from '../pages/Wishlist';

export const routes = [
    {
        path: '/',
        element: <Home />,
        exact: true,
    },
    {
        path: '/product/:product_id',
        element: <Product />,
        exact: true,
    },
    {
        path: '/cart',
        element: <Cart />,
        exact: true,
    },
    {
        path: '/checkout',
        element: <Checkout />,
        exact: true,
    },
    {
        path: '/profile',
        element: <Profile />,
        exact: true,
    },
    {
        path: '/success',
        element: <Success />,
        exact: true,
    },
    {
        path: '/terms',
        element: <Terms />,
        exact: true,
    },
    {
        path: '/products',
        element: <Products />,
        exact: true,
    },
    {
        path: '/wishlist',
        element: <Wishlist />,
        exact: true,
    },
    {
        path: '/login',
        element: <Login />,
        exact: true,
    },
    {
        path: '/password-reset',
        element: <PasswordReset />,
        exact: true,
    },
    {
        path: '/register',
        element: <Register />,
        exact: true,
    },
    {
        path: '*',
        element: <PageNotFound />,
        
    },
    // {
    //     path: '/compare',
    //     element: <Compare />,
    //     exact: true,
    // },
    // {
    //     path: '/blog',
    //     element: <Blog />,
    //     exact: true,
    // },
    // {
    //     path: '/blog/:post_id',
    //     element: <BlogPost />,
    //     exact: true,
    // },
    // {
    //     path: '/admin',
    //     element: <Admin />,
    //     exact: true,
    // },
];
