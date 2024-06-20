// src/redux/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews as fetchNewsAPI } from '../api';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ category, page }) => {
    const articles = await fetchNewsAPI(category, page);
    return articles;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
