import styled from "styled-components";
import { mobile } from "@/utils/responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
`;

// Left
const Left = styled.div`
    display: flex;
    flex-direction: row;
`;

const Logo = styled(Link)`
    color: #000;
    font-size: 24px;
    font-weight: bold;
    padding: 0px 10px;
    text-decoration: none;
    text-transform: uppercase;
`;

// Center
const Center = styled.div`
    display: flex;
    ${mobile({ display: "none" })}
`;

export { Container, Left, Logo, Center };
