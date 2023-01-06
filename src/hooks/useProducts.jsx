import { useQuery } from "@tanstack/react-query";
import { fetchSinToken } from "@/utils/fetch";

const getProducts = async (searchQuery, filters) => {
    console.log(
        "🚀 ~ file: useProducts.jsx:4 ~ getProducts ~ searchQuery",
        searchQuery
    );
    console.log(
        "🚀 ~ file: useProducts.jsx:4 ~ getProducts ~ filters",
        filters
    );

    try {
        const {
            data: { data },
        } = await fetchSinToken(
            `search?q=${searchQuery}&page=${filters.page}&limit=${filters.limit}&sort=${filters.sort}&order=${filters.order}`
        );
        return data;
    } catch (error) {
        console.error(error);
        return { error };
    }
};

export const useProducts = (searchQuery, filters) => {
    const productsQuery = useQuery(
        ["search", searchQuery, filters],
        () => getProducts(searchQuery, filters),
        {
            refetchOnWindowFocus: false,
        }
    );

    return productsQuery;
};
