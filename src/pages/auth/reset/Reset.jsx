import { Container, Form, Input, Login, Title } from "./styled";

export const Reset = () => {
    return (
        <Container className="full__bleed">
            <Form>
                <Title>Restore password</Title>
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />
                <button type="submit">Reset</button>
                <Login to="/login">BACK TO LOGIN</Login>
            </Form>
        </Container>
    );
};
