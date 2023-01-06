import { Link } from "react-router-dom";
import { Container, TopText, TopTexts } from "./styled";

const Top = () => {
    return (
        <Container>
            <Link to="/">
                <button>CONTINUE SHOPPING</button>
            </Link>
            <TopTexts>
                <TopText to="/cart">Shopping Bag</TopText>
                <TopText to="/wishlist">Your wishlist</TopText>
            </TopTexts>
            <Link to="/cart">
                <button type="filled">CHECKOUT NOW</button>
            </Link>
        </Container>
    );
};

export default Top;
