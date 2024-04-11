import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    items: ["Coats", "Shirts", "Boots", "Jeans"]
  },
  {
    category: "Women",
    items: ["Coats", "Shirts", "Boots", "Jeans"]
  },
  {
    category: "Kids",
    items: ["Coats", "Shirts", "Boots", "Jeans"]
  }
];

const sideNavSlice = createSlice({
  name: "Categories",
  initialState
});

export default sideNavSlice;