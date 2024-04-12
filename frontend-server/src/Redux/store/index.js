import { configureStore } from "@reduxjs/toolkit";
import catSlice from "../Category/catSlice";

export const store = configureStore({
  reducer: {
    categoryReducer: catSlice
  }
});