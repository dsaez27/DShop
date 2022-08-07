import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../helpers/responsive";

import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Placeholder from "../assets/placeholder.png";
import Telephone from "../assets/telephone.png";
import Mail from "../assets/mail.png";
import PaymentLogos from "../assets/payment.png";
import { usefulLinks } from "../data";

export const Footer = () => {
  return (
    <>
      <Container>
        <Content>
          <Left>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <Logo>DS</Logo>
            </Link>
            <Desc>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Desc>
            <SocialContainer>
              <SocialIcon color="0D8AF0">
                <img src={Facebook} loading="lazy" alt="Facebook" />
              </SocialIcon>
              <SocialIcon color="C72560">
                <img src={Instagram} loading="lazy" alt="Instagram" />
              </SocialIcon>
              <SocialIcon color="00ACEE">
                <img src={Twitter} loading="lazy" alt="Twitter" />
              </SocialIcon>
            </SocialContainer>
          </Left>
          <Center>
            <Title>Useful Links</Title>
            <List>
              {usefulLinks.map((item) => (
                <ListItem key={item.id}>
                  <Li to={item.route}>{item.name}</Li>
                </ListItem>
              ))}
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactItem>
              <img src={Placeholder} loading="lazy" alt="Placeholder" />
              <span>Arauco 2407, El Salvador, Chile</span>
            </ContactItem>
            <ContactItem>
              <img src={Telephone} loading="lazy" alt="Telephone" />
              <span>+56 9 45178244</span>
            </ContactItem>
            <ContactItem>
              <img src={Mail} loading="lazy" alt="Mail" />
              <span>dssh24@gmail.com</span>
            </ContactItem>
            <Payment src={PaymentLogos} loading="lazy" title="payment" />
          </Right>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 13.5px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: min(1200px, 100%);
  ${tablet({ flexDirection: "column", gap: "1rem" })}
`;

const Title = styled.h3``;

// Footer Left
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Logo = styled.h1``;

const Desc = styled.div`
  width: min(300px, 90ch);
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => `#${props.color}`};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
  }
`;

// Footer Center

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${tablet({ maxWidth: "300px" })}
`;

const ListItem = styled.li`
  width: 50%;
  margin-block-end: 0.5rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Li = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

// Footer Right

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 16px;
    height: 16px;
  }
`;

const Payment = styled.img`
  width: 250px;
  height: auto;
`;
