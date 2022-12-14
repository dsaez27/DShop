import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: min(100%, 100vw);
    height: 100vh;
    min-height: 450px;
    background: url("https://res.cloudinary.com/djv0cypxw/image/upload/v1657850487/Store/background/bg-01.jpg")
        center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    width: min(300px, 90%);
    padding: 20px;
    border-radius: 10px;
    background-color: white;
`;

const Title = styled.h1`
    padding-bottom: 1rem;
`;

const Input = styled.input`
    flex: 1;
    border-radius: 10px;
    border: 1px solid lightgray;
    min-width: 40%;
    padding: 10px;

    &:focus-visible {
        outline: none;
    }
`;

const Login = styled(Link)`
    font-size: 12px;

    color: teal;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: teal;
        opacity: 0.7;
        text-decoration: underline;
    }
`;

export { Container, Form, Title, Input, Login };
