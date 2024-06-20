import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
