import React, { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { TitlePage } from "../../components/TitlePage";
import queryString from "query-string";
import { fetchSinToken } from "../../helpers/fetch";

const Item = lazy(() => import("../../components/Item"));

export const Index = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState({
    search: q,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetchSinToken(`products?q=${q}`);
      setProducts(res.data);
    };
    fetchProducts();
  }, [inputValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue.search}`);
  };

  return (
    <Container>
      <TitlePage title="" position="left" />
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          value={inputValue.search}
          onChange={setInputValue}
          placeholder="Search"
        />
        <Button type="submit">Search</Button>
      </form>
      {q === "" && <h2>Search for a product</h2>}
      {q !== "" && (
        <Items>
          <Suspense fallback={<div>Loading...</div>}>
            <Item products={products} />
          </Suspense>
        </Items>
      )}
    </Container>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 1.2rem;
  &:focus {
    border-color: #000;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 1.2rem;
  &:focus {
    border-color: #000;
  }
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ebebeb;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default Index;
