import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../helpers/responsive";
import Send from "../Assets/send.png";
import { Wrapper } from "./styles/Wrapper";

export const Newsletter = () => {
  return (
    <Container className="full__bleed">
      <Title>Newsletter</Title>
      <Desc>Find out about the latest news and promotions</Desc>
      <InputContainer>
        <Input placeholder="Your mail" />
        <Button type="submit">
          <img src={Send} alt="Send" />
        </Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 450px;
  background-color: #f3c0ba;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 4.5rem;
  margin-bottom: 20px;
  ${mobile({ fontSize: "4rem" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  width: calc(100% - 50px);
  padding: 0 10px;
  border-radius: 25px 0 0 25px;

  &:focus-visible {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  width: 50px;
  background-color: teal;
  border-radius: 0 25px 25px 0;

  img {
    width: 24px;
    height: 24px;
    transform: translateX(-25%);
  }
`;
