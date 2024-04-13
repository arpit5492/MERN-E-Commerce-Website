import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("getCategories", async () => {
    const categories = await fetch("http://localhost:4000/prodCat")
      .then(res => res.json());
    return categories;
  });