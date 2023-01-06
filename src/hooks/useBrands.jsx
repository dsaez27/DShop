import { fetchSinToken } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

const getBrands = async () => {
    try {
        const { data } = await fetchSinToken("brand");
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const useBrands = () => {
    const brandsQuery = useQuery(["brands"], getBrands, {
        staleTime: 1000 * 60 * 60 * 24,
    });

    return {
        brands: brandsQuery.data?.brands || [],
        isLoading: brandsQuery.isLoading,
        error: brandsQuery.error || brandsQuery.data?.error,
    };
};
