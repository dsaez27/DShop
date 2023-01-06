import styled, { keyframes } from "styled-components";

const dotAnimation = keyframes`
   50% {
        transform: translateX(5rem);
   }
`;

const dotsAnimation = keyframes`
    50% {
        transform: translateX(-31px);
    }
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: white;
    filter: contrast(10);
`;

const Dot = styled.span`
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 15px;
    background: #3a3a3a;
    border-radius: 50%;
    filter: blur(5px);
    transform: translateX(0);
    animation: ${dotAnimation} 3s infinite;
`;

const Dots = styled.div`
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 3s infinite;

    & > span {
        display: block;
        float: left;
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
        filter: blur(5px);
        background: #3a3a3a;
        border-radius: 50%;
    }
`;

export { Container, Dot, Dots };
