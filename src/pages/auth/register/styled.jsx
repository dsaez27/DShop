import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const FormContainer = styled.div`
    width: min(100%, 500px);
    height: 100%;
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

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
`;

const Agreement = styled.span`
    font-size: 0.8rem;
`;

const Login = styled(Link)`
    font-size: 1rem;
    color: teal;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
        opacity: 0.7;
        text-decoration: underline;
    }
`;

const Submit = styled.button`
    font-size: 1rem;
    width: 50%;
`;

export { FormContainer, Form, Agreement, Login, Submit };
