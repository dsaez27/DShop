import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MyImage from "./MyImage/MyImage";

const Item = ({ id, image, name, brand, price }, index) => {
    return (
        <Url to={`/product/${id}`} key={index}>
            <Image src={image} title={name} effect="blur" />
            <Title>{name}</Title>
            <Brand>{brand}</Brand>
            <Price>${price}</Price>
        </Url>
    );
};

export default Item;

const Url = styled(NavLink)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: #000;
    text-align: center;
    width: 150px;
`;

const Image = styled(MyImage)`
    width: 100%;
    height: auto;
    border-radius: 1.5rem;
    background-color: white;

    &:hover {
        opacity: 0.8;
    }
`;

const Title = styled.h4`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #000;
`;

const Brand = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #000;
`;

const Price = styled.span`
    padding-inline: 0.5rem;
`;
