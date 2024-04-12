import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProds = createAsyncThunk("getProducts", () => {
  const prods = fetch("http://localhost:4000/prods")
    .then(res => res.json());
  return prods;
});