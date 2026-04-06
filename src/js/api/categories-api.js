import axios from "axios";
import { API_ENDPOINTS } from "../utils/constants";

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

export async function getCategories() {
    try {
        const response = await axios.get(API_ENDPOINTS.CATEGORIES);

        if (!Array.isArray(response.data)) {
            throw new Error('Invalid data format');
    } 
        return response.data;
       
    } catch (error) {
        throw error;
    }
};
