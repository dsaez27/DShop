import { memo, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs as SwiperThumbs } from "swiper";
import "swiper/css";
import Arrow from "@/components/arrow/Arrow";
import {
    Container,
    SliderContainer,
    SliderImage,
    SliderImageThumbs,
} from "./styled";

const Slider = ({ Images }) => {
    const [imagesNavSlider, setImagesNavSlider] = useState(null);
    const sliderRef = useRef(null);

    return (
        <Container>
            <SliderContainer>
                <Arrow direction="left" sliderRef={sliderRef} />
                <Swiper
                    thumbs={{
                        swiper:
                            imagesNavSlider && !imagesNavSlider.destroyed
                                ? imagesNavSlider
                                : null,
                    }}
                    direction="horizontal"
                    ref={sliderRef}
                    slidesPerView={1}
                    loop={false}
                    spaceBetween={32}
                    className="slider-product"
                    modules={[Navigation, SwiperThumbs]}
                >
                    {Images?.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SliderImage
                                    src={slide}
                                    alt=""
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Arrow direction="right" sliderRef={sliderRef} />
            </SliderContainer>
            <Swiper
                onSwiper={setImagesNavSlider}
                direction="horizontal"
                spaceBetween={8}
                loop={false}
                slidesPerView={3}
                className="thumbs"
                modules={[Navigation, SwiperThumbs]}
            >
                {Images?.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SliderImageThumbs
                                src={slide}
                                alt=""
                                loading="lazy"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default memo(Slider);
