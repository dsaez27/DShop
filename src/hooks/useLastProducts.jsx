import { fetchSinToken } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

const getLastProducts = async () => {
    const { data } = await fetchSinToken("last-products");
    return data;
};

export const useLastProducts = () => {
    const lastProductsQuery = useQuery(["lastProducts"], getLastProducts, {
        staleTime: 1000 * 60 * 60 * 24,
    });

    return lastProductsQuery;
};
