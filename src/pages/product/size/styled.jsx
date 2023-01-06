import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Title = styled.span`
    font-weight: normal;
    font-size: 1rem;
    color: #828282;
`;

const SizeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const SizeItem = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 30px;
    font-weight: normal;
    border-radius: 0.5rem;
    border: 1px solid teal;
    font-size: 0.9rem;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? "teal" : "white")};
    color: ${({ selected }) => (selected ? "white" : "teal")};

    &:hover {
        ${({ selected }) => (selected ? null : `background-color: teal;`)}
        ${({ selected }) => (selected ? null : `color: white;`)}
    }
`;

export { Container, Title, SizeContainer, SizeItem };
