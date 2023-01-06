import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`;

const Detail = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease;
    max-height: ${(props) => (props.open ? "500px" : "0px")};
`;

const Title = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 1.2rem;
        font-weight: normal;
        color: #555;
        padding: 0 1rem;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export { Container, Detail, Title, Content };
