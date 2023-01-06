import React from "react";
import styled from "styled-components";

const TitlePage = ({ title, position }) => {
    return <Title position={position}>{title}</Title>;
};

export default TitlePage;

const Title = styled.h1`
    font-weight: normal;
    text-align: ${(props) => props.position || "center"};
    margin-bottom: 1rem;
`;
