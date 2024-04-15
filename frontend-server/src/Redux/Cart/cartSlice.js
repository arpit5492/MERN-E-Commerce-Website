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
    },
    updateItemQuantity: (state, action) => {
      // console.log(action.payload);
      let index = action.payload.index;
      if(action.payload.operator === "+") {
        ++ state.cartItems[index].quantity;
        state.totalItemsPrice += action.payload.item.price;
        ++ state.totalQuantity;
        state.totalItemsPrice = parseFloat(state.totalItemsPrice.toFixed(2));
      } else {
        if(state.cartItems[index].quantity > 1) {
          -- state.cartItems[index].quantity;
          state.totalItemsPrice -= action.payload.item.price;
          -- state.totalQuantity;
          state.totalItemsPrice = parseFloat(state.totalItemsPrice.toFixed(2));
        }
      }
    },
    deleteCartItem: (state, action) => {
      let filteredCart = state.cartItems.filter((elem) => {
        return elem.id != action.payload.id;
      });
      state.cartItems = filteredCart;

      state.totalItemsPrice -= (action.payload.price * action.payload.quantity);
      state.totalQuantity -= action.payload.quantity;
      -- state.totalItems;
      state.totalItemsPrice = parseFloat(state.totalItemsPrice.toFixed(2));
    }
  }
});

export const {addCartItem, updateItemQuantity, deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;