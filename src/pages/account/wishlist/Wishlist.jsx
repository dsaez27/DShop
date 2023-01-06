import { Suspense, useEffect, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "@/utils/isEmpty";
import HeartIcon from "@/assets/icons/heart.png";

import {
    Buttons,
    Container,
    Heart,
    InfoEmpty,
    InfoWishes,
    Title,
    WishlistContainer,
} from "./styled";
import { removeWishes } from "@/features/wishlist/wishlistSlice";

const Item = lazy(() => import("./item/Item"));

const EmptyWishlist = () => {
    return (
        <InfoEmpty>
            <h3>You have no items in your wishlist</h3>
            <Link to="/products">Go to products</Link>
        </InfoEmpty>
    );
};

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.wishes);

    const handleRemoveAll = () => {
        dispatch(removeWishes());
    };

    const handleAddToCart = () => {
    };

    return (
        <Container>
            <Heart src={HeartIcon} alt="Heart" />
            <Title>My Wishlist</Title>
            <WishlistContainer>
                {isEmpty(wishes) ? (
                    <EmptyWishlist />
                ) : (
                    <>
                        <InfoWishes>
                            <Suspense fallback={<h3>Loading...</h3>}>
                                {wishes.map((wish) => (
                                    <Item key={wish} url={wish} />
                                ))}
                            </Suspense>
                        </InfoWishes>
                        <Buttons>
                            <button onClick={handleRemoveAll}>
                                Empty Wishlist
                            </button>
                            <button type="filled" onClick={handleAddToCart}>
                                Add all to cart
                            </button>
                        </Buttons>
                    </>
                )}
            </WishlistContainer>
        </Container>
    );
};

export default Wishlist;
