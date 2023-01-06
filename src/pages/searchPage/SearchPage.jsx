import React, { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { FiltersForm } from "./filter/Filters";
import { useDebounce } from "@/hooks/useDebounce";
import { LoadingIcon } from "@/shared/LoadingIcon";

export const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const [filters, setFilters] = useState({
        page: 1,
        limit: 1,
        sort: "name",
        order: "asc",
    });

    const debouncedSearchQueryChange = useDebounce(searchQuery, 500);

    const debouncedFiltersChange = useDebounce(filters, 500);

    const { data, isLoading, error } = useProducts(
        debouncedSearchQueryChange,
        debouncedFiltersChange
    );

    return (
        <div>
            <FiltersForm
                searchQuery={searchQuery}
                filters={filters}
                setFilters={setFilters}
                setSearchQuery={setSearchQuery}
            />
            {error && <div>{error.message}</div>}
            {isLoading ? (
                <LoadingIcon />
            ) : (
                <ul>
                    {data.products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
