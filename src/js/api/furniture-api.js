import axios from "axios";
import { API_ENDPOINTS } from "../utils/constants";

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

export async function getFurnitures({ page = 1, limit = 8, category = '' } = {}) {
    try {
        const params = { page, limit };

        if (category) {
            params.category = category;
        }

        const { data } = await axios.get(API_ENDPOINTS.FURNITURES, { params });

        if (!data || !Array.isArray(data.furnitures)) {
            throw new Error('Invalid furnitures format');
        }

        return data;

    } catch (error) {
        throw error;
    }
};

export async function getFurnitureById(id) {
    try {
        if (!id) {
            throw new Error('ID is required');
        }

        const { data } = await axios.get(API_ENDPOINTS.FURNITURE_BY_ID(id));

        return data;

    } catch(error) {
        throw error;
    }
};
