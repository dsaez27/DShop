import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../../utils/responsive";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: all 0.5s ease;

    ${mobile({ flexDirection: "column", gap: "20px", padding: "20px" })};
`;

const Image = styled(Link)`
    flex: 1;

    & > img {
        border-radius: 1rem;
        object-fit: cover;
        padding: 0.5rem;
        width: 100%;
        height: 100%;
    }
`;

const ProductName = styled(Link)`
    flex: 4;
    color: #000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Price = styled.div`
    font-weight: 600;
    flex: 1;
`;

const Stock = styled.div`
    flex: 1;
`;

const AddToCart = styled.div`
    flex: 1;
`;

const AddToCartButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: normal;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
`;

const Trash = styled.div`
    flex: 1;
    cursor: pointer;
`;

const TrashButton = styled.button`
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #fff;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #e6e6e6;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export {
    Container,
    Image,
    ProductName,
    Price,
    Stock,
    AddToCart,
    AddToCartButton,
    Trash,
    TrashButton,
};
