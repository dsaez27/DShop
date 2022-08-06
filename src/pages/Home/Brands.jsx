import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { TitlePage } from "../../components/TitlePage";
import { Arrow } from "../../components/Arrow";
import { fetchSinToken } from "../../helpers/fetch";

export const Brands = () => {
  const [brands, setBrands] = useState([]);
  const sliderRef = useRef(null);

  const handleClick = useCallback((direction) => {
    if (direction === "left") {
      sliderRef.current.swiper.slidePrev();
    } else {
      sliderRef.current.swiper.slideNext();
    }
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await fetchSinToken("brands");
      const data = await res.json();
      setBrands(data.brands);
    };
    fetchBrands();
  }, []);

  const brandsList = brands.map(({ name, image }) => (
    <SwiperSlide key={name}>
      <Image src={image} alt={name} loading="lazy" title={name} />
    </SwiperSlide>
  ));

  return (
    <>
      <Container>
        <TitlePage title="Popular Brands" position="left" />
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperContainer>
            <div onClick={() => handleClick("left")}>
              <Arrow direction="left" />
            </div>
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
            <div onClick={() => handleClick("right")}>
              <Arrow direction="right" />
            </div>
          </SwiperContainer>
        </Suspense>
      </Container>
    </>
  );
};

const Container = styled.div``;

const SwiperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 150px;
  height: 70px;
  object-fit: scale-down;
`;
