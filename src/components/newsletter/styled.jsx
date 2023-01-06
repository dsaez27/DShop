import styled from "styled-components";
import { mobile } from "../../utils/responsive";

const Container = styled.div`
    min-height: 450px;
    background-color: #f3c0ba;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
`;

const Title = styled.div`
    font-size: 4.5rem;
    margin-block-end: 20px;
    ${mobile({ fontSize: "4rem" })}
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border: none;
    width: calc(100% - 50px);
    padding: 0 10px;
    border-radius: 10px 0 0 10px;

    &:focus-visible {
        outline: none;
    }
`;

const Button = styled.button`
    border: none;
    width: 50px;
    background-color: teal;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { Container, Title, Desc, InputContainer, Input, Button };
