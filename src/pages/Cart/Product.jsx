import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { priceChange, qtyChange, removeItem } from "../../redux/actions/cart";
import { Counter } from "../../components/Counter";
import Delete from "../../assets/delete.png";
import { mobile } from "../../helpers/responsive";

const Product = ({
  item: { image, name, _id, counter, price, size, color, total_qty },
}) => {
  const dispatch = useDispatch();
  const [qty, setCounter] = useState(counter);
  const [value, setValue] = useState(price);

  useEffect(() => {
    const total = qty * price;
    setValue(total);
  }, [qty, price]);

  useEffect(() => {
    dispatch(qtyChange(_id, qty));
  }, [qty, _id, dispatch]);

  useEffect(() => {
    dispatch(priceChange(_id, value));
  }, [value, _id, dispatch]);

  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={image} alt={name} title={name} loading="lazy" />
        </ImageContainer>
        <Details>
          <Name to={`/product/${_id}`}>{name}</Name>
          <Code>SKU: {_id}</Code>
          <Size>Size: {size}</Size>
          <Color color={color} />
        </Details>
        <Counter total={total_qty} counter={qty} setCounter={setCounter} />
        <Price>
          <ProductPrice>${value}</ProductPrice>
        </Price>
        <TrashSVG onClick={() => dispatch(removeItem(_id))}>
          <Trash src={Delete} alt="delete" title="delete" />
        </TrashSVG>
      </Container>
    </>
  );
};

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

const Image = styled.img`
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
  font-weight: 400;
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
const TrashSVG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default memo(Product);
