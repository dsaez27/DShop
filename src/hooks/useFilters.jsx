import { fetchSinToken } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

const getFiltersData = async () => {
    try {
        const { data } = await fetchSinToken("filters");
        console.log(
            "🚀 ~ file: useFilters.jsx:7 ~ getFiltersData ~ data",
            data
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const useFilters = () => {
    const filtersQuery = useQuery(["filters"], getFiltersData, {
        staleTime: 1000 * 60 * 60 * 24,
    });

    console.log(
        "🚀 ~ file: useFilters.jsx:21 ~ useFilters ~ filtersQuery",
        filtersQuery.data
    );

    return {
        filters: filtersQuery.data || [],
        isLoading: filtersQuery.isLoading,
        error: filtersQuery.error || filtersQuery.data?.error,
    };
};
