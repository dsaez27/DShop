import { mobile } from "@/utils/responsive";
import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0.5rem;

    ${({ focused }) => focused && `border: 0.5px solid #000;`}
`;

const Input = styled.input`
    border: none;
    font-size: 12px;
    color: #000;
    ${mobile({ fontSize: "10px", width: "100%" })}

    &:focus-visible {
        outline: none;
    }
`;

export { Container, SearchContainer, Input };
