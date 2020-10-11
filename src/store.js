import { configureStore } from "@reduxjs/toolkit";
import flagsReducer from "./reducers/flags.reducer";

export default configureStore({
  reducer: {
    flags: flagsReducer,
  },
});
