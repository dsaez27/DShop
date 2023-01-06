import React from "react";
import { Link } from "react-router-dom";
import { tablet } from "../../utils/responsive";

export const Unauthorized = () => {
    return (
        <Container className="full__bleed">
            <Title>401</Title>
            <h2>Unauthorized</h2>
            <Link to="/">
                <button>Back to home</button>
            </Link>
        </Container>
    );
};

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
    font-size: 100px;
    ${tablet({ marginBottom: "20px" })}
`;

