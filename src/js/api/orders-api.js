import axios from "axios";
import { API_ENDPOINTS } from "../utils/constants";

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

export async function createOrder(orderData) {
    try {
        if (!orderData) {
            throw new Error('Order data is required');
        }

        const { data } = await axios.post(API_ENDPOINTS.ORDERS, orderData);

        return data;

    } catch (error) {
        throw error;
    }
}
