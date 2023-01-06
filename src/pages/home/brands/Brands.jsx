import { Suspense, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import TitlePage from "@/components/TitlePage";

import { Container, Image, SwiperContainer } from "./styled";
import Arrow from "@/components/arrow/Arrow";
import { useBrands } from "@/hooks/useBrands";
import { LoadingIcon } from "@/shared/LoadingIcon";


const Brands = () => {
    const sliderRef = useRef(null);
    const { data: brands } = useBrands();

    const brandsList = brands?.data.map(({ name, image }) => (
        <SwiperSlide key={name}>
            <Image src={image} alt={name} title={name} effect="blur" />
        </SwiperSlide>
    ));

    return (
        <Container>
            <TitlePage title="Popular Brands" position="left" />
            <Suspense fallback={<LoadingIcon />}>
                <SwiperContainer>
                    <Arrow direction="left" sliderRef={sliderRef} />
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        navigation={false}
                        loop={true}
                        className="swiper"
                        ref={sliderRef}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {brandsList}
                    </Swiper>
                    <Arrow direction="right" sliderRef={sliderRef} />
                </SwiperContainer>
            </Suspense>
        </Container>
    );
};

export default Brands;
