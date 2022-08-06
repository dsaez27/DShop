import React from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { mobile, tablet } from "../../helpers/responsive";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Arrow } from "../../components/Arrow";
import { useArrow } from "../../hooks/useArrow";

export const Slider = () => {
  const { sliderRef, handleClick } = useArrow();

  return (
    <>
      <Container className="full__bleed">
        <ArrowContainer direction="left" onClick={() => handleClick("left")}>
          <Arrow direction="left" width="15%" />
        </ArrowContainer>
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
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
        >
          {sliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Slide bg={item.bg}>
                <ImgContainer>
                  <Image
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
                  />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowContainer direction="right" onClick={() => handleClick("right")}>
          <Arrow direction="right" width="15%" />
        </ArrowContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ paddingInline: "0.5rem" })};

  & .slider {
    .swiper-wrapper {
      .swiper-slide-prev,
      .swiper-slide-next {
        opacity: 0.5;
      }
    }
  }
`;

const ArrowContainer = styled.div`
  div {
    position: absolute;
    transform: translateY(-50%);
    ${({ direction }) => (direction === "left" ? "left: 2rem" : "right: 2rem")};
    z-index: 2;

    ${mobile(({ direction }) =>
      direction === "left" ? "left: 0" : "right: 0"
    )};
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => `#${props.bg}`};
  padding: 2rem;
  border-radius: 30px;

  ${tablet({ height: "100%" })}
  ${mobile({
    flexDirection: "column",
    paddingInline: "1rem",
    paddingBlock: "2rem",
  })}
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ width: "300px" })}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 2rem, 2.5rem);
`;

const Desc = styled.p`
  font-size: clamp(1rem, 1.5rem, 2rem);
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  width: fit-content;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  font-size: clamp(1rem, 1.5rem, 2rem);
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;
