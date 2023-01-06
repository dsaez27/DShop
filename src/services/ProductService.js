import { fetchSinToken } from "@/utils/fetch";

const getProduct = async (url) => {
    const res = await fetchSinToken("product" + url, "GET");
    return await res.json();
};

const getAllProducts = async () => {
    const res = await fetchSinToken("product", "GET");
    return await res.json();
};

export { getProduct, getAllProducts };
