import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Cards = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-items: center;
`;

const Card = styled.div`
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

export { Container, Cards, Card };
