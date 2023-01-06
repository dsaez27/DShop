import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Container = styled.div`
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

const Image = styled(LazyLoadImage)`
    width: 100%;
    height: auto;
    border-radius: 1.5rem;
    background-color: white;
    cursor: pointer;

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
    cursor: default;
`;

const Brand = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #000;
    cursor: default;
`;

const Price = styled.span`
    padding-inline: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: default;
`;

const Buy = styled.button`
    border-radius: 0.5rem;
    img {
        filter: invert(1);
    }
`;

export { Container, Image, Title, Brand, Price, Buy };
