import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
`;

const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 0.5rem;
`;

const Qty = styled.span`
    width: 30px;
    height: 30px;
    font-weight: var(--font-weight-normal);
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
`;

const Minus = styled.button`
    width: 30px;
    height: 30px;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: teal;
    border-radius: 0.5rem 0 0 0.5rem;

    &:hover {
        background-color: rgba(0, 128, 128, 0.9);
    }
`;

const Plus = styled.button`
    width: 30px;
    height: 30px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: teal;
    border-radius: 0 0.5rem 0.5rem 0;

    &:hover {
        background-color: rgba(0, 128, 128, 0.9);
    }
`;

export { Container, CounterContainer, Qty, Minus, Plus };
