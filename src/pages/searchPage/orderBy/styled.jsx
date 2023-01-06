import { mobile } from "@/utils/responsive";
import styled from "styled-components";

const Select = styled.select`
    width: 100px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0.25rem;
    font-size: 12px;
    color: #000;
    ${mobile({ fontSize: "10px", width: "100%" })}
    &:focus-visible {
        outline: none;
    }
`;

export default Select;
