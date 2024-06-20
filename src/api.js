// src/api.js
import axios from 'axios';

const API_KEY = 'ceb47a1e8f2449f198d8250d06498445';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general', page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        page,
        apiKey: API_KEY,
        country: 'us',
      },
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};
