import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import { sliderItems } from "@/utils/data";

import { Arrows, Button, Container, Desc, Image, InfoContainer, Slide, Title } from "./styled";
import Arrow from "@/components/arrow/Arrow";
import "react-lazy-load-image-component/src/effects/blur.css";

const Slider = () => {
    const [items, setItems] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        setItems(sliderItems);

        return () => {
            setItems([]);
        };
    }, []);

    const slides = items.map(({ id, bg, img, title, desc }) => (
        <SwiperSlide key={id}>
            <Slide bg={bg}>
                <Image src={img} alt={title} title={title} effect="blur" />
                <InfoContainer>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
        </SwiperSlide>
    ));

    return (
        <Container className="full__bleed">
            <Arrows>
                <Arrow direction="left" sliderRef={sliderRef} />
                <Arrow direction="right" sliderRef={sliderRef} />
            </Arrows>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                navigation={false}
                loop={true}
                centeredSlides={true}
                className="slider"
                ref={sliderRef}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    769: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 16,
                    },
                    1600: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                }}
            >
                {slides}
            </Swiper>
        </Container>
    );
};

export default Slider;
