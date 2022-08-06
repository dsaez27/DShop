import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Counter } from "../../components/Counter";
import { Newsletter } from "../../components/Newsletter";
import { Wish } from "../../components/Wish";
import { fetchSinToken } from "../../helpers/fetch";
import { mobile, tablet } from "../../helpers/responsive";
import { ContentModal } from "./ContentModal";
import { Size } from "./Size";
import { Slider } from "./Slider";

export const Index = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState("xs");

  let { id: _id, name, price, image, desc, quantity: total_qty } = product;

  const handleAdd = () => {
    dispatch(
      addItem({ _id, name, price, image, desc, total_qty, counter, size })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchSinToken(`product/${id}`);
      const { product } = await res.json();
      setProduct(product);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Container>
        <Card>
          <Slider />
          <InfoContainer>
            <Name>{name}</Name>
            <Desc>{desc}</Desc>

            <PriceContainer>
              <Title>Price: </Title>
              <Price>${price}</Price>
            </PriceContainer>
            <WishContainer>
              <Wish id={id} />
            </WishContainer>

            <Size size={size} setSize={setSize} />
            <Counter
              total={total_qty}
              counter={counter}
              setCounter={setCounter}
            />

            {product.quantity > 0 ? (
              <Button
                type="button"
                onClick={() => {
                  handleAdd();
                  setIsOpen(true);
                }}
              >
                ADD TO CART
              </Button>
            ) : (
              <Button disabled>OUT OF STOCK</Button>
            )}
          </InfoContainer>
        </Card>
      </Container>
      <Newsletter />

      <ContentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        product={product}
        name="Product"
        size={size}
        counter={counter}
      />
    </>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: minmax(500px, 100vw);
  height: 100%;
`;

const Card = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2rem;
  margin: 1rem;
  max-width: 1024px;
  gap: 1rem;
  align-items: flex-start;

  ${tablet(`flex-direction: column; max-width: 90%`)}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${mobile({ width: "100%", height: "100%" })}
`;

const Name = styled.h1`
  font-weight: bold;
`;

const Desc = styled.h3`
  font-weight: 400;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.h5`
  font-weight: 200;
  font-size: 24px;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;

const WishContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  ${mobile(`width: 100% `)}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FilterTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;

const Button = styled.button`
  margin-block-start: 2rem;
  padding: 15px;
  border-radius: 25px;
  width: fit-content;
  border: 1px solid teal;
  background-color: white;

  font-weight: 500;

  &:hover {
    background-color: #f4f4f4;
  }
`;
