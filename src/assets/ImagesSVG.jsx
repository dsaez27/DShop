import React from 'react';

export const ArrowLeft = ({ size = 48 }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' height={size} width={size}>
			<path d='M28.05 36 16 23.95 28.05 11.9 30.2 14.05 20.3 23.95 30.2 33.85Z' />
		</svg>
	);
};

export const ArrowRight = ({ size = 48 }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' height={size} width={size}>
			<path d='M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z' />
		</svg>
	);
};

