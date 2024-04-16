import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from '../redux/operations';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addMatcher(action => {
        action.type.endsWith('pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('fulfilled');
      }, handleFulfilled)
      .addMatcher(action => {
        action.type.endsWith('rejected');
      }, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
