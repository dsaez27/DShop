import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Right as RightContent } from "./Right";
import { Toggle } from "../Toggle";
import { mobile } from "../../helpers/responsive";
import styled from "styled-components";

export const Index = () => {
  return (
    <>
      <LogoMobile to="/">ds</LogoMobile>
      <Container>
        <Left>
          <Menu mobile="true" />
          <Logo to="/">ds</Logo>
        </Left>
        <Center>
          <Search />
        </Center>
        <Right>
          <RightContent />
        </Right>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

const LogoMobile = styled(Link)`
  display: none;

  ${mobile({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0.5rem",
    color: "#000",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
  })}
`;

// Left
const Left = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled(Link)`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  padding: 0px 10px;
  text-decoration: none;
  text-transform: uppercase;

  ${mobile({ display: "none" })}
`;

// Center
const Center = styled.div`
  display: flex;
`;

// Right
const Right = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

// Mobile and tablet
const Menu = styled(Toggle)`
  display: none;
  ${mobile({ display: "flex" })}
`;
