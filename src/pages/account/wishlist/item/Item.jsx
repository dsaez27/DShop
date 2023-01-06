import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Delete from "@/assets/icons/delete.png";
import {
    AddToCart,
    AddToCartButton,
    Container,
    Image,
    Price,
    ProductName,
    Stock,
    Trash,
    TrashButton,
} from "./styled";
import { removeWish } from "@/features/wishlist/wishlistSlice";

const Item = ({ url }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [url]);

    return (
        <Container>
            <Image to={`/` + url}>
                <img
                    src={data.images ? data.images[0] : ""}
                    alt={data.name}
                    title={data.name}
                    loading="lazy"
                />
            </Image>
            <ProductName to={`/` + url}>{data.name}</ProductName>
            <Price>${data.price}</Price>
            <Stock>In Stock</Stock>
            <AddToCart>
                <AddToCartButton>Add to Cart</AddToCartButton>
            </AddToCart>
            <Trash>
                <TrashButton onClick={() => dispatch(removeWish(url))}>
                    <img src={Delete} alt="Delete" />
                </TrashButton>
            </Trash>
        </Container>
    );
};

export default memo(Item);
