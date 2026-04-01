import { API_BASE_URL, FEEDBACKS_LIMIT } from '../utils/constants.js';

export async function fetchFeedbacks(limit = FEEDBACKS_LIMIT) {
  const response = await fetch(`${API_BASE_URL}/feedbacks?limit=${limit}`);

  if (!response.ok) {
    throw new Error('Failed to fetch feedbacks.');
  }

  return response.json();
}
