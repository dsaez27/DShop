import styled from "styled-components";

const Container = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
    position: absolute;

    ${(props) => (props.direction === "right" ? "right: 0;" : "left: 0;")}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;

    ${(props) => props.direction === "left" && "rotate: 180deg;"}
`;

export { Container, Image };
