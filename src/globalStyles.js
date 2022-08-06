import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: 'Urbanist', sans-serif; 
}

:root{
    //theme light 
    --primary-color: teal;
    --secondary-color: #f3c0ba;
    --tertiary-color: #ebebeb;
    --quaternary-color: #f3f3f3;

    //font size
    --font-size-small: 12px;
    --font-size-medium: 14px;
    --font-size-large: 16px;
    --font-size-xlarge: 18px;
    --font-size-xxlarge: 20px;

    //font weight
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    //padding
    --padding-small: 10px;
    --padding-medium: 20px;
    --padding-large: 30px;
    --padding-xlarge: 40px;

    //margin
    --margin-small: 10px;
    --margin-medium: 20px;
    --margin-large: 30px;
    --margin-xlarge: 40px;

    //border radius
    --border-radius-small: 5px;
    --border-radius-medium: 10px;
    --border-radius-large: 20px;
    --border-radius-xlarge: 30px;

    //Gap
    --gap-small: 5px;
    --gap-medium: 10px;
    --gap-large: 20px;
    --gap-xlarge: 30px;
}

#portal {
	transition: all 0.5s ease;
}

.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
}
`;

export default GlobalStyles;
