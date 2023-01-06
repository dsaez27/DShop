import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mobile } from "@/utils/responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = memo(({ url }) => {
    const dispatch = useDispatch();

    const [product, setProduct] = useState({
        counter: 1,
        size: "",
        details: {},
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchSinToken(`product/${url}`);
            const { product } = await res.json();
            setProduct({ ...product, details: product });
        };
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <ImageContainer>
                    <Image
                        src={product.details.images[0]}
                        alt={product.details.sname}
                        title={product.details.name}
                        effect="blur"
                    />
                </ImageContainer>
                {/*
                <Details>
                    <Name to={`/${url}`}>{product.detailsname}</Name>
                    <Code>SKU: {product.details.sku}</Code>
                    <Size>Size: {product.size}</Size>
                </Details>
                <Counter
                    total={total_qty}
                    counter={qty}
                    setCounter={setCounter}
                />
                <Price>
                    <ProductPrice>${value}</ProductPrice>
                </Price>
                <Button onClick={() => dispatch(removeItem(_id))}>
                    <Trash src={Delete} alt="delete" title="delete" />
                </Button> */}
            </Container>
        </>
    );
});

export default Product;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: row;
    transition: all 0.5s ease;
    width: 100%;
    height: 100%;

    ${mobile({ flexDirection: "column", textAlign: "center" })};
`;

//Images
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled(LazyLoadImage)`
    width: 150px;
    object-fit: cover;
    padding: 0.5rem;
`;

//Details Product
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    text-decoration: none;
    color: #000;

    ${mobile({ alignItems: "center" })};
`;

const Name = styled(Link)`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1rem;
    font-weight: normal;
    text-decoration: none;
    color: #000;
    padding-block-end: 0.5rem;
    ${mobile({ fontSize: "1rem" })}

    &:hover {
        text-decoration: underline;
    }
`;

const Code = styled.span`
    font-size: 0.8rem;
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${mobile({ fontSize: "0.6rem" })}
`;

const Size = styled.div`
    font-size: 0.8rem;
    font-weight: 300;
    ${mobile({ fontSize: "0.6rem" })}
`;

const Color = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    ${mobile({ width: "10px", height: "10px" })};
`;

//Price
const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ProductPrice = styled.span`
    font-size: 1.2rem;
    font-weight: 300;
`;

//Delete Button
const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
