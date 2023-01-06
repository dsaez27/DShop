import { tablet } from "@/utils/responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

const Content = styled.div`
    font-size: 13.5px;
    display: flex;
    flex-direction: row;
    width: min(1200px, 100%);
    ${tablet({ flexDirection: "column", gap: "1rem" })}
`;

// Footer Left
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Logo = styled(Link)`
    font-size: 2rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
`;

const Desc = styled.div`
    width: 80%;
    ${tablet({ maxWidth: "300px" })}
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => `#${props.color}`};
`;

// Footer Center
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    ${tablet({ maxWidth: "300px" })}
`;

const ListItem = styled.li`
    width: 50%;
    margin-block-end: 0.5rem;

    &::first-letter {
        text-transform: uppercase;
    }
`;

const Li = styled(Link)`
    color: #000;
    text-decoration: none;

    &:hover {
        color: #000;
        text-decoration: underline;
    }
`;

// Footer Right
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 16px;
        height: 16px;
    }
`;

const Payment = styled.img`
    width: 250px;
    height: auto;
`;

export {
    Container,
    Content,
    Left,
    Logo,
    Desc,
    SocialContainer,
    SocialIcon,
    Center,
    List,
    ListItem,
    Li,
    Right,
    ContactItem,
    Payment,
};
