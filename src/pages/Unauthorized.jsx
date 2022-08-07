import React from "react";
import { Link } from "react-router-dom";
import { tablet } from "../helpers/responsive";

export const Unauthorized = () => {
  return (
    <Container className="full__bleed">
      <Title>401</Title>
      <h2>Unauthorized</h2>
      <Link to="/">
        <Button>Back to home</Button>
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

const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  border-radius: 25px;
`;
