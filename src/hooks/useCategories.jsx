import { useQuery } from "@tanstack/react-query";
import { fetchSinToken } from "@/utils/fetch";

const getCategories = async () => {
    try {
        const { data } = await fetchSinToken("categories");
        return data;
    } catch (error) {
        console.error(error);
        return { error };
    }
};

export const useCategories = () => {
    const categoriesQuery = useQuery(["categories"], () =>
        getCategories(params)
    );
    return {
        categories: categoriesQuery.data?.categories || [],
        isLoading: categoriesQuery.isLoading,
        error: categoriesQuery.error || categoriesQuery.data?.error,
    };
};
