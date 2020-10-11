import { createSlice, createSelector } from "@reduxjs/toolkit";
import unsortedCountries from "../data/countries.json";

function objectFlip(obj) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    ret[obj[key]] = key;
  });
  return ret;
}

const countries = objectFlip(unsortedCountries);

export const flagsSlice = createSlice({
  name: "flags",
  initialState: {
    countryNames: Object.keys(countries).sort(),
    currentId: 0,
    nameHidden: true,
  },
  reducers: {
    nextFlag: (state) => {
      let flagId = state.currentId + 1;
      if (flagId > state.countryNames.length - 1) flagId = 0;
      state.currentId = flagId;
      state.nameHidden = true;
    },
    previousFlag: (state) => {
      let flagId = state.currentId - 1;
      if (flagId < 0) flagId = state.countryNames.length - 1;
      state.currentId = flagId;
      state.nameHidden = true;
    },
    randomFlag: (state) => {
      state.currentId = Math.floor(
        Math.random() * state.countryNames.length - 1
      );
      state.nameHidden = true;
    },
    revealName: (state) => {
      state.nameHidden = false;
    },
    hideName: (state) => {
      state.nameHidden = true;
    },
    goToLetter: (state, action) => {
      state.currentId = state.countryNames.findIndex((e) =>
        e.startsWith(action.payload)
      );
    },
  },
});

export const {
  revealName,
  hideName,
  nextFlag,
  goToLetter,
  previousFlag,
  randomFlag,
} = flagsSlice.actions;

export const selectNameHidden = (state) => {
  return state.flags.nameHidden;
};

export const selectCountryName = (state) => {
  return state.flags.countryNames[state.flags.currentId];
};

export const selectCountryCode = createSelector(
  selectCountryName,
  (countryName) => countries[countryName]
);
export default flagsSlice.reducer;
