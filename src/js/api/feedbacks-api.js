import axios from "axios";
import { API_ENDPOINTS } from "../utils/constants";

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

function roundRate(rate) {
    const safeRate = Number(rate) || 0;

    if (safeRate >= 3.3 && safeRate <= 3.7) {
        return 3.5;
    }

     if (safeRate >= 3.8 && safeRate <= 4.2) {
        return 4;
    }
    return Math.max(0, Math.min(5, Math.round(safeRate * 2) / 2));
};

function mapFeedbackToReview(feedback = {}) {
    return {
        author: String(feedback.author ?? feedback.name ?? 'Анонімний користувач'),
        text: String(feedback.text ?? feedback.descr ?? feedback.comment ?? ''),
        rating: roundRate(feedback.rating ?? feedback.rate),
    };
}

export async function getFeedbacks(limit = 10) {
    try {
        const { data } = await axios.get(API_ENDPOINTS.FEEDBACKS, { params: { limit } });

        if (!data || !Array.isArray(data.feedbacks)) {
            throw new Error('Invalid feedbacks format');
        }

        const reviews = data.feedbacks.map(mapFeedbackToReview);

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
