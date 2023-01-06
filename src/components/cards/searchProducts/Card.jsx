import { useNavigate } from "react-router-dom";
import Cart from "@/assets/icons/cart.png";
import { Brand, Buy, Container, Image, Price, Title } from "./styled";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ item }) => {
    const navigate = useNavigate();


    return (
        <Container>
            <Image
                src={item.images[0]}
                title={item.name}
                alt={item.name}
                effect="blur"
                onClick={() => {
                    navigate(item.url);
                }}
            />
            <Title>{item.name}</Title>
            <Brand>{item.brand.name}</Brand>
            <Price>
                <span>${item.price}</span>
                <Buy
                    onClick={() => {
                        navigate(item.url);
                    }}
                >
                    <img src={Cart} alt="cart" title="cart" width="20px" />
                </Buy>
            </Price>
        </Container>
    );
};

export default Card;
