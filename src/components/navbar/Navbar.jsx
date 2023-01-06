import Right from "./right/Right";
import { Container, Left, Logo } from "./styled";

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo to="/">ds</Logo>
            </Left>
            <Right />
        </Container>
    );
};

export default Navbar;
