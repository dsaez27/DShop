import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
`;

const Search = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;

    img {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

const Account = styled.div``;

const Ul = styled.ul`
    list-style: none;
`;

const Li = styled.li`
    &:hover {
        color: #cefffc;
    }
`;

const Login = styled(Link)`
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: #000;

    &:hover {
        text-decoration: underline;
    }
`;

const Cart = styled(Link)`
    display: flex;

    img {
        width: 1.2rem;
        height: 1.2rem;
    }

    &[data-cart-count] {
        &:after {
            content: attr(data-cart-count);
            background: red;
            color: #fff;
            border-radius: 50%;
            font-size: 11px;
            width: 0.8rem;
            height: 0.8rem;
            text-align: center;
            font-weight: bold;
            transform: translate(-0.25rem, -0.25rem);
        }
    }
`;

const Heart = styled(Link)`
    img {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

const ProfileImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
`;

export { Container, Search, Account, Ul, Li, Login, Cart, Heart, ProfileImage };
