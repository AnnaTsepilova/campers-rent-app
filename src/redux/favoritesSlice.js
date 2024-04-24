import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      const favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
      return { favorites: favorites };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
