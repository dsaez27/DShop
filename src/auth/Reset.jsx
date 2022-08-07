import React from "react";

export const Reset = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Restore password</Title>
          <Form>
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm password" />
            <Button type="submit">Reset</Button>
            <Login to="/login">BACK TO LOGIN</Login>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 450px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: min(300px, 90%);
  padding: 20px;
  background-color: white;
  ${mobile({ width: "90%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  padding-bottom: 30px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;

  &:focus-visible {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;

const Login = styled(Link)`
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
