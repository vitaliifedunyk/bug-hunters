import { API_BASE_URL, PRODUCTS_PER_PAGE } from '../utils/constants.js';

export async function fetchFurniture({
  page = 1,
  limit = PRODUCTS_PER_PAGE,
  category = '',
} = {}) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (category) {
    params.append('category', category);
  }

  const response = await fetch(
    `${API_BASE_URL}/furniture?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch furniture.');
  }

  return response.json();
}

export async function fetchFurnitureById(id) {
  const response = await fetch(`${API_BASE_URL}/furniture/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch furniture by id.');
  }

  return response.json();
}
