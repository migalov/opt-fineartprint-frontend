import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_DOMAIN_BACKEND;

const axiosClient = axios.create({
    baseURL: `${API_URL}/api`
})

const getCalculation = () => axiosClient.get(`/calculators/1?populate[parameters][populate][inputs]=*`);

export default {
    getCalculation
}