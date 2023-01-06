import { fetchSinToken } from "@/utils/fetch";

const getBrands = async () => {
    const res = await fetchSinToken("brand", "GET");
    return await res.json();
};

const getBrand = async (id) => {
    const res = await fetchSinToken("brand/" + id, "GET");
    return await res.json();
};

export { getBrands, getBrand };
