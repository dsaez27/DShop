import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Range = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const Typography = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;

    ${({ gutterBottom }) => gutterBottom && `margin-bottom: 2.4rem;`}
`;

const Slider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: #d8d8d8;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: #4a90e2;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: #4a90e2;
        cursor: pointer;
    }

    &:hover {
        opacity: 1;
    }

    &:focus {
        opacity: 1;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 0.4rem;
        cursor: pointer;
        transition: background 0.2s ease-in-out;
        box-shadow: 0.1rem 0.1rem 0.1rem #000000;
        background: #3071a9;
        border-radius: 0.2rem;
        border: 0.1rem solid #010101;
    }

    &::-moz-range-track {
        width: 100%;
        height: 0.4rem;
        cursor: pointer;
        transition: background 0.2s ease-in-out;
        box-shadow: 0.1rem 0.1rem 0.1rem #000000;
        background: #3071a9;
        border-radius: 0.2rem;
        border: 0.1rem solid #010101;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.6rem;
    border: 0.1rem solid #d8d8d8;
    border-radius: 0.4rem;
    outline: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: #4a4a4a;
    margin-bottom: 1.6rem;

    &:focus {
        border: 0.1rem solid #4a90e2;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type="number"] {
        -moz-appearance: textfield;
    }
`;

const RangeInput = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #4caf50;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: #4caf50;
        cursor: pointer;
    }
`;

const RangeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RangeOutput = styled.output`
    font-size: 18px;
    font-weight: bold;
    color: #666;
    width: 60px;
    text-align: center;
`;

export {
    Container,
    Range,
    Typography,
    Slider,
    Input,
    RangeInput,
    RangeContainer,
    RangeOutput,
};
