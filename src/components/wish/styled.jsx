import Heart from "react-heart";
import styled from "styled-components";

const Container = styled.div`
    width: fit-content;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    background: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    gap: 0.5rem;
    flex-direction: row;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const HeartButton = styled(Heart)`
    width: 1.2rem;
`;

export { Container, HeartButton };
