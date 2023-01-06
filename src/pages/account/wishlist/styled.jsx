import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 1rem;
    width: 100%;
    min-height: 90vh;
    gap: 1rem;
`;

const Title = styled.h1`
    font-weight: normal;
    text-align: center;
    margin-bottom: 1rem;
`;

const WishlistContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
        font-weight: normal;
        text-align: center;
    }

    a {
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        text-decoration: none;
        color: #000;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const InfoWishes = styled.div``;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding-block: 2rem;

    ${mobile({ gap: "20px", flexDirection: "column" })}
`;

const Heart = styled.img`
    width: 3rem;
    height: 3rem;
`;

export {
    Container,
    Title,
    WishlistContainer,
    InfoEmpty,
    InfoWishes,
    Buttons,
    Heart,
};
