import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../../data";
import { mobile } from "../../helpers/responsive";

export const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <Card key={item.id}>
            <Image
              src={item.img}
              loading="lazy"
              alt={item.title}
              title={item.title}
            />
            <Info>
              <Title>{item.title}</Title>
              <Link to={`/category/${item.id}`}>
                <Button type="submit">SHOP NOW</Button>
              </Link>
            </Info>
          </Card>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  ${mobile({
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const Card = styled.div`
  flex: 1;
  height: 400px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  ${mobile({ fontSize: "1.75rem" })}
`;

const Button = styled.button`
  border: none;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px 20px;
  color: gray;
  font-weight: 600;

  &:hover {
    filter: brightness(0.9);
  }
`;
