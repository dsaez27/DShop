import styled from "styled-components";
import { mobile } from "../../utils/responsive";

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    width: clamp(0px, 100%, 800px);
    flex-direction: column;
`;

const Details = styled.div`
    grid-area: Details;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "Slider Details";
    gap: 2rem;
    justify-items: center;
   // ${mobile({ display: "flex", flexDirection: "column" })}

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas: "Slider" "Details";
    }


`;

const Name = styled.h1`
    font-size: 1.5rem;
`;

const Brand = styled.h3`
    font-weight: bold;
`;

const Desc = styled.p`
    font-size: 0.9rem;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Price = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.span`
    font-size: 1rem;
    color: #828282;
`;

const Button = styled.button`
    width: fit-content;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 0.5rem;
    margin-top: 1rem;

    &:hover {
        background-color: rgba(0, 128, 128, 0.9);
    }

    &:disabled {
        background-color: #828282;

        &:hover {
            background-color: rgba(130, 130, 130, 0.5);
        }
    }
`;

const ImageButton = styled.img`
    width: 20px;
    height: 20px;
    filter: invert(1);
    margin-left: 0.5rem;
`;

export {
    Container,
    Wrapper,
    Details,
    Content,
    Name,
    Brand,
    Desc,
    PriceContainer,
    Price,
    Title,
    Button,
    ImageButton,
};
