import axios from "axios";
import { API_ENDPOINTS } from "../utils/constants";

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

function roundRate(rate) {
    if (rate >= 3.3 && rate <= 3.7) {
        return 3.5;
    }

     if (rate >= 3.8 && rate <= 4.2) {
        return 4;
    }
    return rate;
};

export async function getFeedbacks(limit = 10) {
    try {
        const { data } = await axios.get(API_ENDPOINTS.FEEDBACKS, { params: { limit } });

        if (!data || !Array.isArray(data.feedbacks)) {
            throw new Error('Invalid feedbacks format');
        }

        const reviews = data.feedbacks.map(feedback => ({ ...feedback, rate: roundRate(feedback.rate) }));

        return {
            reviews,
            total: data.total,
            page: Number(data.page),
            limit: Number(data.limit)
        };

    } catch (error) {
        throw error;
    }
};