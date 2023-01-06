import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Slider from "./slider/Slider";
import Size from "./size/Size";
import Wish from "@/components/wish/Wish";
import Counter from "@/components/counter/Counter";
import Newsletter from "@/components/newsletter/Newsletter";
import Cart from "@/assets/icons/cart.png";
import {
    Brand,
    Button,
    Container,
    Content,
    Desc,
    Details,
    ImageButton,
    Name,
    Price,
    PriceContainer,
    Title,
    Wrapper,
} from "./styled";
import { useProduct } from "@/hooks/useProduct";
import { LoadingIcon } from "@/shared/LoadingIcon";
import { getAuth } from "@/features/user/userSlice";

const Product = () => {
    const { url } = useParams();
    const auth = useSelector(getAuth);

    const { data: product, isLoading, isError, error } = useProduct(url);

    if (isLoading) {
        return <LoadingIcon />;
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Breadcrumbs category={product.category.name} url={url} />
                    <Content>
                        <Slider Images={product?.images} />
                        <Details>
                            <Name>{product?.name}</Name>
                            <Brand>{product?.brand.name}</Brand>
                            <Desc>{product?.description}</Desc>
                            <PriceContainer>
                                <Title>Price: </Title>
                                <Price>${product?.price}</Price>
                            </PriceContainer>
                            {auth && url && <Wish id={url} />}
                            <Size sizes={product?.sizes} />
                            <Counter quantity={product?.quantity} />
                            <Button type="button">
                                Add to cart
                                <ImageButton src={Cart} alt="cart" />
                            </Button>
                        </Details>
                    </Content>
                </Wrapper>
            </Container>
            <Newsletter />
        </>
    );
};

export default Product;
