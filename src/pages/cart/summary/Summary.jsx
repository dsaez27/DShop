import { Link } from "react-router-dom";
import { Container, SummaryItem, SummaryTitle } from "./styled";

const Summary = () => {
    const items = [];

    const subTotal = 0;

    const shipping = items.length > 0 ? 0 : 10;

    const shippingDiscount = subTotal > 100 ? 0 : 10;

    const total = subTotal + shipping;

    return (
        <Container>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <span>Subtotal</span>
                <span>${subTotal}</span>
            </SummaryItem>
            <SummaryItem>
                <span>Estimated Shipping</span>
                <span>${shipping}</span>
            </SummaryItem>
            <SummaryItem>
                <span>Shipping Discount</span>
                <span>${shippingDiscount}</span>
            </SummaryItem>
            <SummaryItem type="total">
                <span>Total</span>
                <StereoPannerNode>${total}</StereoPannerNode>
            </SummaryItem>
            <Link to="/cart">
                <button type="submit">CHECKOUT NOW</button>
            </Link>
        </Container>
    );
};

export default Summary;
