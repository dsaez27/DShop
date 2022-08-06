import React, { Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { TitlePage } from "../../components/TitlePage";
import { fetchSinToken } from "../../helpers/fetch";

export const LastProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetchSinToken("products/last-products");
      const { products } = await res.json();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        <TitlePage title={"Last Products"} position="left" />
        <Items>
          <Suspense fallback={<div>Loading...</div>}>
            {products.map(
              ({ name, image, price, id, brand: { name: brandName } }) => (
                <Url to={`/product/${id}`} key={id}>
                  <Image src={image} loading="lazy" title={name} alt={name} />
                  <Title>{name}</Title>
                  <Brand>{brandName}</Brand>
                  <Price>${price}</Price>
                </Url>
              )
            )}
          </Suspense>
        </Items>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
`;

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
