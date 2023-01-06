import { memo } from "react";
import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
} from "./styled";

const Breadcrumbs = ({ category, url }) => {
    return (
        <Container>
            <Breadcrumb>
                <BreadcrumbLink to="/">Home</BreadcrumbLink>
                <BreadcrumbSeparator>›</BreadcrumbSeparator>
                <BreadcrumbLink to={`/category/${category}`}>
                    {category}
                </BreadcrumbLink>
                <BreadcrumbSeparator>›</BreadcrumbSeparator>
                <BreadcrumbLink to={`${url}`}>{url}</BreadcrumbLink>
            </Breadcrumb>
        </Container>
    );
};

export default Breadcrumbs;
