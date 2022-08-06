import { useCallback, useRef } from 'react';

export const useArrow = () => {
	const sliderRef = useRef(null);

	const handleClick = useCallback(direction => {
		if (direction === 'left') {
			sliderRef.current.swiper.slidePrev();
		} else {
			sliderRef.current.swiper.slideNext();
		}
	}, []);

	return {
		sliderRef,
		handleClick,
	};
};
