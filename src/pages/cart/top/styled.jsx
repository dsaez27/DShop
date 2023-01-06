import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 2rem;
    ${mobile({ gap: "20px", flexDirection: "column" })}
`;

const TopButton = styled(Link)`
    border-radius: 10px;
    padding: 10px;

    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

const TopTexts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const TopText = styled(Link)`
    text-decoration: none;

    margin: 0 10px;
    color: #000;

    &:hover {
        text-decoration: underline;
    }
`;

export { Container, TopButton, TopTexts, TopText };
