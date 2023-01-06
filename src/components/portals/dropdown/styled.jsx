import { tablet } from "@/utils/responsive";
import styled from "styled-components";

const Container = styled.div`
    ${({ isOpen }) =>
        isOpen
            ? {
                  display: "flex",
                  flexDirection: "column",
              }
            : {
                  display: "none",
              }}
    position: absolute;
    overflow: visible;
    width: 228px;
    margin: 0;
    padding: 8px;
    border: 1px solid color("mystic", "gray");
    border-radius: var(--border-radius-small);
    background: #ffffff;
    box-shadow: 0 0 60px rgba(14, 42, 71, 0.25);
    top: 4.75rem;
    right: 2rem;
    z-index: 1000;
    transition: all 0.3s ease-in-out;

    @keyframes popover {
        0% {
            opacity: 0;
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    &:before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid white;
        position: absolute;
        top: -0.5rem;
        right: 3.75rem;
    }
`;

const Top = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-column-gap: 0.5rem;
    padding: 0.5rem;
`;

const Left = styled.div`
    width: 30px;
    height: 30px;
    ${tablet({ width: "40px", height: "40px" })};

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${tablet({ width: "100%" })};
`;

const User = styled.h5`
    font-weight: bold;
    color: #000;

    a {
        color: #000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Email = styled.p`
    font-size: 0.8rem;
    color: #000;
`;

const Hr = styled.hr`
    width: 70%;
    margin-inline-start: 0.5rem;
    border-color: var(--tertiary-color);
    margin-block: 0.25rem;
`;

const Buttom = styled.button`
    padding: 0.5rem;
    background-color: transparent;
    color: #000;
    text-decoration: none;
    font-size: var(--font-size-medium);
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        background-color: transparent;
    }
`;

export { Container, Top, Left, Right, User, Email, Hr, Buttom };
