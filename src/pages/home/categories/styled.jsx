import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { tablet } from "../../../utils/responsive";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ${tablet({ flexDirection: "column" })}
`;

const Card = styled.div`
    display: block;
    overflow: hidden;
    width: 33.333%;

    ${tablet({ width: "100%", height: "50vh" })}
`;

const Image = styled(LazyLoadImage)`
    height: 100%;
    width: 100%;

    ${tablet({ width: "92vw", height: "50vh", objectFit: "cover" })}
`;

const Info = styled.div`
    transform: translateY(-100%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

const Title = styled.h1`
    font-weight: normal;
    color: #fff;
    text-align: center;
    cursor: pointer;

    //Underline animation
    &:after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 0.5s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;

export { Container, Card, Image, Info, Title };
