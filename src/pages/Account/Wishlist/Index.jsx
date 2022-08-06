import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "../../../components/ErrorBoundary";
import { mobile } from "../../../helpers/responsive";
import { clearWishes } from "../../../redux/actions/wishlist";
import HeartIcon from "../../../assets/heart.png";
import { fetchSinToken } from "../../../helpers/fetch";

const Product = React.lazy(() => import("./Product"));

export const Index = () => {
  const [allWishes, setAllWishes] = useState([]);
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleClearWishlist = () => {
    dispatch(clearWishes());
  };

  useEffect(() => {
    const fetchWishes = async () => {
      const res = await fetchSinToken("products");
      setAllWishes(res.data);
    };
    fetchWishes();
  }, [items]);

  return (
    <Container>
      <Heart src={HeartIcon} alt="Heart" />
      <Title>My Wishlist</Title>

      <WishlistContainer>
        <Info>
          <ErrorBoundary>
            {!allWishes.length > 0 ? (
              <InfoEmpty>
                <h3>You have no items in your wishlist</h3>
                <Link to="/products">Go to products</Link>
              </InfoEmpty>
            ) : (
              <InfoWishes>
                <Suspense fallback={<h1>Cargando...</h1>}>
                  {allWishes.map((item) => (
                    <Product item={item} key={item.id} />
                  ))}
                </Suspense>
              </InfoWishes>
            )}
            <Buttons>
              <Button onClick={handleClearWishlist}>Empty Wishlist</Button>
              <Button type="filled">Add All to cart</Button>
            </Buttons>
          </ErrorBoundary>
        </Info>
      </WishlistContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  min-height: 90vh;
  gap: 1rem;
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
  margin-bottom: 1rem;
`;

const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  transition: all 0.5s ease;
`;

const InfoEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: all 0.5s ease;

  h3 {
    font-size: 1.5rem;
    font-weight: 200;
    text-align: center;
  }

  a {
    font-size: 1.2rem;
    font-weight: 200;
    text-align: center;
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const InfoWishes = styled.div`
  transition: all 0.5s ease;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: 3rem;
  ${mobile({ gap: "20px", flexDirection: "column" })}
`;

const Button = styled.button`
  border-radius: 25px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 300;

  transition: all 0.3s ease-in-out;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid #000")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Heart = styled.img`
  width: 3rem;
  height: 3rem;
`;
