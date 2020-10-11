import { createSlice, createSelector } from "@reduxjs/toolkit";
import countries from "../data/countries.json";

export const flagsSlice = createSlice({
  name: "flags",
  initialState: {
    countryCodes: Object.keys(countries),
    currentId: 0,
    nameHidden: true,
  },
  reducers: {
    nextFlag: (state) => {
      let flagId = state.currentId + 1;
      if (flagId > state.countryCodes.length - 1) flagId = 0;
      state.currentId = flagId;
      state.nameHidden = true;
    },
    previousFlag: (state) => {
      let flagId = state.currentId - 1;
      if (flagId < 0) flagId = state.countryCodes.length - 1;
      state.currentId = flagId;
      state.nameHidden = true;
    },
    randomFlag: (state) => {
      state.currentId = Math.floor(
        Math.random() * state.countryCodes.length - 1
      );
      state.nameHidden = true;
    },
    revealName: (state) => {
      state.nameHidden = false;
    },
    hideName: (state) => {
      state.nameHidden = true;
    },
  },
});

export const {
  revealName,
  hideName,
  nextFlag,
  previousFlag,
  randomFlag,
} = flagsSlice.actions;

export const selectNameHidden = (state) => {
  return state.flags.nameHidden;
};

export const selectCountryCode = (state) => {
  return state.flags.countryCodes[state.flags.currentId];
};

export const selectCountryName = createSelector(
  selectCountryCode,
  (countryCode) => countries[countryCode]
);
export default flagsSlice.reducer;
