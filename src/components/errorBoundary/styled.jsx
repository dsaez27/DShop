import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin: 0.5rem;
`;

const Error = styled.p`
    font-size: 1rem;
    font-weight: normal;
    color: #333;
    margin: 0.5rem;
`;

const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    margin: 0.5rem;
    cursor: pointer;
`;

export { Container, H1, Error, Button };
