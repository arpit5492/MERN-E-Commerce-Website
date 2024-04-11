import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Men", "Women", "Kids", "Best Offers"];

const catSlice = createSlice({
  name: "Category",
  initialState
});

export default catSlice;