import styled from "styled-components";

const Container = styled.div`
    border: 0.5px solid #e6e6e6;
    padding: 20px;
    height: 100%;
    max-width: 400px;
    width: 100%;
`;

const SummaryTitle = styled.h1`
    font-weight: normal;
    text-align: center;
`;

const SummaryItem = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

export { Container, SummaryTitle, SummaryItem };
