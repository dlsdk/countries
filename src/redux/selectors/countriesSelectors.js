import { createSelector } from "reselect";

const selectCountries = (state) => state.contriesReducers;

export const selectCountry = createSelector(
   [selectCountries],
   (countriesState) => countriesState.countries
)

export const selectLoading = createSelector(
    [selectCountries],
    (countriesState) => countriesState.isLoad
)
