import { mobile } from "@/utils/responsive";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas: "filter main";
    ${mobile({ gridTemplateColumns: "1fr" })}
`;

const Filter = styled.div`
    grid-area: filter;
    ${mobile({ display: "none" })}
`;

const Main = styled.div`
    grid-area: main;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: fit-content 1fr;
    grid-template-areas: "order" "products";
    ${mobile({
        gridTemplateRows: "1fr",
        gridTemplateAreas: "'order' 'products'",
    })}
`;

const Top = styled.div`
    grid-area: order;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
`;

const Products = styled.div`
    grid-area: products;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "product product product product";
    padding: 1rem;
    ${mobile({
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: "'product product' 'product product'",
    })}
`;

export { Container, Main, Filter, Top, Products };
