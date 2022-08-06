import { useCallback, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs as SwiperThumbs, Mousewheel } from 'swiper';
import 'swiper/css';
// import "swiper/css/navigation";
import styled from 'styled-components';
import { tablet } from '../../helpers/responsive';

const slides = [
	'https://picsum.photos/1920/1080',
	'https://picsum.photos/1920/1081',
	'https://picsum.photos/1920/1082',
	'https://picsum.photos/1920/1083',
	'https://picsum.photos/1920/1084',
];

export const Slider = () => {
	const [imagesNavSlider, setImagesNavSlider] = useState(null);

	const handleClick = useCallback(direction => {
		if (direction === 'left') {
			sliderRef2.current.swiper.slidePrev();
		} else {
			sliderRef2.current.swiper.slideNext();
		}
	}, []);

	return (
		<Container>
			<ThumbsContainer>
				<Thumbs
					onSwiper={setImagesNavSlider}
					direction='vertical'
					spaceBetween={24}
					slidesPerView={3}
					navigation={{
						nextEl: '.slider__next',
						prevEl: '.slider__prev',
					}}
					breakpoints={{
						0: {
							direction: 'horizontal',
						},
						769: {
							direction: 'vertical',
						},
					}}
					modules={[Navigation, SwiperThumbs]}
				>
					{slides.map((slide, index) => {
						return (
							<SwiperSlide key={index} style={{ marginBottom: '5px' }}>
								<SliderImage>
									<img src={slide} alt='' loading='lazy' />
								</SliderImage>
							</SwiperSlide>
						);
					})}
				</Thumbs>
			</ThumbsContainer>
			<SliderContainer
				thumbs={{ swiper: imagesNavSlider && !imagesNavSlider.destroyed ? imagesNavSlider : null }}
				direction='horizontal'
				slidesPerView={1}
				spaceBetween={32}
				mousewheel={true}
				navigation={{
					nextEl: '.slider__next',
					prevEl: '.slider__prev',
				}}
				modules={[Navigation, SwiperThumbs, Mousewheel]}
			>
				{slides.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<SliderImage>
								<img src={slide} alt='' loading='lazy' />
							</SliderImage>
						</SwiperSlide>
					);
				})}
			</SliderContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 400px;
	width: 50%;
	display: flex;
	flex-direction: row;
	gap: 10px;

	${tablet({ flexDirection: 'column-reverse', width: '100%' })}
`;

const ThumbsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`;

const Thumbs = styled(Swiper)`
	width: 100px;
	height: 100%;
	margin-inline: 10px;

	${tablet({ width: '100%', height: '100px' })}
`;

const SliderContainer = styled(Swiper)`
	width: 100%;
	height: 100%;
`;

const SliderImage = styled.div`
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
`;
