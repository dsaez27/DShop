import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../../utils/responsive";

const Bottom = styled.div`
    display: flex;
    gap: 1rem;

    ${tablet({ flexDirection: "column" })}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: all 0.5s ease;
    width: 100%;
    height: 100%;
`;

const InfoEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    transition: all 0.5s ease;
    font-size: 1.2rem;
    font-weight: 300;
`;

const InfoEmptyLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    transition: all 0.5s ease;
    width: fit-content;
    height: 100%;
    border-radius: 10px;
    background: #000;
    padding: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export { Bottom, Info, InfoEmpty, InfoEmptyLink };
