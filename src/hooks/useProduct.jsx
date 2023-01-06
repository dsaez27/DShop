import { fetchSinToken } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

const getProduct = async (url) => {
    const {
        data: { data },
    } = await fetchSinToken(`product/${url}`);
    return data;
};

export const useProduct = (url) => {
    const productQuery = useQuery(["product", url], () => getProduct(url), {
        enabled: !!url,
    });
    return productQuery;
};
