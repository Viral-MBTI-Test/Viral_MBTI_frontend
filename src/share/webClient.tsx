import axios, { AxiosInstance } from "axios";

const API_ROOT = "https://mbti-test.duckdns.org";

const webClient: AxiosInstance = axios.create({
    baseURL: API_ROOT,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
    },
});

webClient.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("access");
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default webClient;
