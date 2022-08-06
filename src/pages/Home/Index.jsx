import React from 'react';
//import { Slider } from '../components/home/Slider';
import { Categories } from './Categories';
import { Brands } from './Brands';
import { LastProducts } from './LastProducts';
import { Slider } from './Slider';
import { Newsletter } from '../../components/Newsletter';

export const Index = () => {
	return (
		<>
			<Slider />
			<Categories />
			<LastProducts />
			<Brands />
			<Newsletter />
		</>
	);
};
