import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFilterLocation = state => state.filterLocation;

export const filteredAdvertsSelector = createSelector(
  [selectAdverts, selectFilterLocation],
  (adverts, filter) => {
    let result = filter.filterLocation
      ? adverts.filter(advert =>
          advert.location
            .toLowerCase()
            .includes(filter.filterLocation.toLowerCase())
        )
      : adverts;

    return result;
  }
);
