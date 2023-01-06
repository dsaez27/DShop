import { mobile } from "@/utils/responsive";
import styled from "styled-components";

const Container = styled.div`
    width: min(100%, 100vw);
    height: 100%;
    min-height: 100vh;
    background: url("https://res.cloudinary.com/djv0cypxw/image/upload/v1657850487/Store/background/bg-01.jpg")
        center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1``;

const InputGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 100%;
    height: auto;

    ${mobile({ gridTemplateColumns: "1fr" })}
`;

const Input = styled.input`
    border-radius: 10px;
    border: 1px solid lightgray;
    width: 100%;
    height: 2rem;
    padding: 10px;

    &:focus-visible {
        outline: none;
    }
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
`;

const Submit = styled.button`
    width: 100%;
`;

export { Container, Title, InputGroup, Input, ButtonGroup, Submit };
