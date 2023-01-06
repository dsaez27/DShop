import { Link, useNavigate } from "react-router-dom";
import Cart from "@/assets/icons/cart.png";
import { Brand, Buy, Container, Image, Price, Title } from "./styled";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useQueryClient } from "@tanstack/react-query";

const Card = ({ item }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const presetData = () => {
        queryClient.setQueryData(["product", item.url], item);
    };

    return (
        <Container onMouseEnter={presetData}>
            <Link to={item.url}>
                <Image
                    src={item.images[0]}
                    title={item.name}
                    alt={item.name}
                    effect="blur"
                />
            </Link>
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
