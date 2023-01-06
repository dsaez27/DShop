import { createGlobalStyle } from "styled-components";

export const screen = {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Urbanist", sans-serif;
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: normal;
        transition: all 0.3s ease-in-out;
        background-color: #008080;
        border: none;
        width: fit-content;
        color: white;
        cursor: pointer;

        &:hover {
            //darken teal
            background-color: rgb(1, 102, 102);
        }
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .thumbs {
        height: fit-content;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slider-product {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    // thumb active inverse
    .thumbs > .swiper-wrapper {
        & > :not(.swiper-slide-thumb-active) {
            opacity: 0.5;
        }
    }


    .error{
        color: red;
        font-size: 0.8rem;
    }
`;

export default GlobalStyles;
