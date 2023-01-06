import { fetchSinToken } from "@/utils/fetch";

export const forgot = async (values) => {
    return await fetchSinToken("auth/forgot", values, "POST");
};

export const reset = (token, password) => {};

export const renew = () => {};
