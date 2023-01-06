import { useNavigate } from "react-router-dom";
import { Container, Title } from "./styled";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container className="full__bleed">
            <Title>404</Title>
            <h2>Page not found</h2>
            <button onClick={() => navigate("/")}>Go to home</button>
        </Container>
    );
};

export default NotFound;
