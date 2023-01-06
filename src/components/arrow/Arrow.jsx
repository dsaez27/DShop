import { useCallback } from "react";
import ArrowImg from "@/assets/icons/arrow.png";
import { Container, Image } from "./styled";

const Arrow = ({ direction, sliderRef }) => {
    const handleClick = useCallback((direction) => {
        if (direction === "left") {
            sliderRef.current.swiper.slidePrev();
        } else {
            sliderRef.current.swiper.slideNext();
        }
    }, []);

    return (
        <Container direction={direction} onClick={() => handleClick(direction)}>
            <Image src={ArrowImg} alt="" direction={direction} />
        </Container>
    );
};

export default Arrow;
