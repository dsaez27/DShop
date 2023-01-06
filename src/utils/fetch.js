import { getApiUrl } from "../config";
import { loadState } from "./localStorage";
import axios from "axios";

export const fetchSinToken = (endpoint, data, method = "GET") => {
    const url = getApiUrl(endpoint);

    if (method === "GET") {
        return axios.get(url);
    } else {
        return axios({
            method,
            url,
            data,
        });
    }
};

export const fetchConToken = async (endpoint, data, method = "GET") => {
    const url = getApiUrl(endpoint);
    const token = loadState("token");

    if (method === "GET") {
        return axios.get(url, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
    } else if (method === "DELETE") {
        return axios.delete(url, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
    } else {
        return axios({
            method,
            url,
            data,
            headers: {
                token: `Bearer ${token}`,
            },
        });
    }
};
