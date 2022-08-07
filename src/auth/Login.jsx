import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../helpers/responsive";
import { useForm } from "../hooks/useForm";
import { login } from "../redux/actions/auth";

export const Login = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleInputChange] = useForm({
    Email: "dssh27@gmail.com",
    Password: "123456",
  });

  const { Email, Password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(Email, Password));
  };
  return (
    <>
      <Container className="full__bleed">
        <Form onSubmit={handleLogin}>
          <Title>SIGN IN</Title>
          <Input
            type="text"
            placeholder="Email"
            onChange={handleInputChange}
            name="Email"
            autoComplete="off"
            value={Email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            name="Password"
            value={Password}
          />
          <Button type="submit">LOGIN</Button>
          <Reset to="/password-reset">DO NOT REMEMBER YOUR PASSWORD?</Reset>
          <Register to="/register">CREATE AN NEW ACCOUNT</Register>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: min(100%, 100vw);
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://res.cloudinary.com/djv0cypxw/image/upload/v1657850487/Store/background/bg-01.jpg")
      center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  width: min(300px, 90%);
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h1`
  padding-bottom: 30px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 25px;
  border: 1px solid lightgray;
  min-width: 40%;
  padding: 10px;

  &:focus-visible {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  background-color: teal;
  color: white;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Reset = styled(Link)`
  font-size: 12px;

  color: teal;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: teal;
    opacity: 0.7;
    text-decoration: underline;
  }
`;

const Register = styled(Reset)``;
