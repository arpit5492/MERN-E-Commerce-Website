import { configureStore } from "@reduxjs/toolkit";
import catSlice from "../Category/catSlice";
import prodSlice from "../Product/prodSlice";
import cartSlice from "../Cart/cartSlice";

export const store = configureStore({
  reducer: {
    categoryReducer: catSlice,
    prodReducer: prodSlice,
    cr: cartSlice
  }
});