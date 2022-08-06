import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../helpers/responsive";

const Item = (props) => {
  const brandName = props.products.map(({ brand: { name } }) =>
    console.log(name)
  );

  return (
    <Url to={`/product/${props.id}`} key={props.id}>
      <Image src={props.image} loading="lazy" title={props.name} />
      <Title>{props.name}</Title>
      <Brand>{brandName}</Brand>
      <Price>${props.price}</Price>
    </Url>
  );
};

export default Item;

const Url = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  width: 150px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
  background-color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #000;
`;

const Brand = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #000;
`;

const Price = styled.span`
  padding-inline: 0.5rem;
`;
