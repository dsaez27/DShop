import { mobile, tablet } from "@/utils/responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    background: #fff;
    position: relative;

    ${tablet({ paddingInline: "0.5rem" })};

    .swiper-slide-prev,
    .swiper-slide-next {
        opacity: 0.5;

        & > div {
            height: calc(100% - 2rem);
        }
    }
`;

const Arrows = styled.div`
    width: 75%;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    ${tablet({ width: "90%" })};
    ${mobile({ display: "none" })}
`;

const Slide = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => `#${props.bg}`};
    padding: 2rem;
    border-radius: 10px;

    ${tablet({ height: "100%" })}
    ${mobile({
        flexDirection: "column",
        paddingInline: "1rem",
        paddingBlock: "2rem",
    })}
`;

const Image = styled(LazyLoadImage)`
    width: 300px;
    height: fit-content;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: clamp(1.5rem, 2rem, 2.5rem);
`;

const Desc = styled.p`
    font-size: clamp(1rem, 1.2rem, 2rem);
    font-weight: normal;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export { Container, Button, Arrows, Slide, Image, InfoContainer, Title, Desc };
