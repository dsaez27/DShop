import { tablet } from "@/utils/responsive";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 85vh;
    padding: 20px;
    gap: 20px;
    background-color: #f5f5f5;
    ${tablet({ flexDirection: "column", gap: "30px" })}
`;

const Title = styled.h1`
    font-size: clamp(50px, 468px, 100px);
    ${tablet({ marginBottom: "20px" })}
`;

export { Container, Title };
