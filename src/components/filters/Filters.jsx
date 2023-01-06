import { useState } from "react";
import Brand from "./brand/Brand";
import Category from "./category/Category";
import Price from "./price/Price";
import Range from "./range/Range";
import { Container } from "./styled";

const Filters = () => {
    const [filters, setFilters] = useState({
        category: [],
        price: [],
        rating: [],
        brand: [],
        range: [],
    });
    return (
        <Container>
            {/* <Category filters={filters.category} setFilters={setFilters} />
            <Price filters={filters.price} setFilters={setFilters} />
            <Brand filters={filters.brand} setFilters={setFilters} />
            <Range filters={filters.range} setFilters={setFilters} /> */}
        </Container>
    );
};
export default Filters;
