import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
  totalItemsPrice: 0,
  totalItems: 0,
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      let itemExist = state.cartItems.find((item) => item.id === action.payload.id);
      if(!itemExist) {
        state.totalItems = ++ state.totalItems;
        state.cartItems = [...state.cartItems, action.payload];
        state.totalItemsPrice += action.payload.price
        state.totalQuantity = ++ state.totalQuantity;
        state.totalItemsPrice = parseFloat(state.totalItemsPrice.toFixed(2));
      }

      // console.log(state.cartItems);
    }
  }
});

export const {addCartItem} = cartSlice.actions;
export default cartSlice.reducer;