import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterLocation: '',
};

export const filterSlice = createSlice({
  name: 'filterLocation',
  initialState: filterInitialState,
  reducers: {
    setFilterLocation(state, action) {
      state.filterLocation = action.payload;
    },
  },
});

export const { setFilterLocation } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
