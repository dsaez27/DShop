import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const Container = styled.div`
    grid-area: Slider;
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${mobile({ width: "100%" })}
`;

const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const SliderImageThumbs = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
`;

const SliderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export { Container, SliderContainer, SliderImageThumbs, SliderImage };
