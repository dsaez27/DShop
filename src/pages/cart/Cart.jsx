import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import TitlePage from "@/components/TitlePage";
import Top from "./top/Top";
import  Summary  from "./summary/Summary";
import  isEmpty  from "@/utils/isEmpty";

const Product = lazy(() => import("./product/Product"));

const EmptyCart = () => {
    return (
        <InfoEmpty>
            You have no items in your cart
            <InfoEmptyLink to="/products">Go to products</InfoEmptyLink>
        </InfoEmpty>
    );
};

const Cart = () => {
    const { items } = useSelector((state) => state.cart);

    return (
        <>
            <TitlePage title="Your Bag" />
            <Top />
            <Bottom>
                <Info>
                    {isEmpty(items) ? (
                        <EmptyCart />
                    ) : (
                        <Suspense fallback={<h1>Loading...</h1>}>
                            {items.map((item, index) => (
                                <Product url={url} key={index} />
                            ))}
                        </Suspense>
                    )}
                </Info>
                <Summary />
            </Bottom>
        </>
    );
};

export default Cart;
