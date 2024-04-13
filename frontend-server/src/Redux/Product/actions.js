import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProds = createAsyncThunk("getProducts", async () => {
  const prods = await fetch("http://localhost:4000/prods")
    .then(res => res.json());
  return prods;
});