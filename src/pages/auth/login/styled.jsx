import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
    width: min(100%, 300px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: auto;
    padding: 1rem;
    margin: 1rem;
    gap: 1rem;
    border-radius: 10px;
    background-color: white;
`;

const Submit = styled.button`
    width: 100%;
`;

const Reset = styled(Link)`
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

const Register = styled(Reset)``;

export { Form, Reset, Register, Submit };
