import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const SwiperContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-block: 2rem;
`;

const Image = styled(LazyLoadImage)`
    display: block;
    width: 150px;
    height: 70px;
    object-fit: scale-down;
`;

export { Container, SwiperContainer, Image };
