import { mobile } from "@/utils/responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.8rem;
    color: #828282;
    grid-area: Breadcrumbs;
    padding-block: 1rem;
`;

const Breadcrumb = styled.span`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;
    max-width: clamp(0px, 100%, 300px);

    ${mobile({
        maxWidth: "clamp(0px, 100%, 200px)",
    })}
`;

const BreadcrumbLink = styled(Link)`
    padding-inline: 0.5rem;
    text-decoration: none;
    color: #828282;

    &:hover {
        text-decoration: underline;
    }
`;

const BreadcrumbSeparator = styled.span`
    color: #000;
`;

export { Container, Breadcrumb, BreadcrumbLink, BreadcrumbSeparator };
