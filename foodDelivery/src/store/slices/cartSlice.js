import { createSlice } from '@reduxjs/toolkit';
import { food_list } from "../../assets/assets";

const initialState = {
  cartItems: {},
  food_list,
  totalAmount: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = 1;
      } else {
        state.cartItems[itemId] += 1;
      }
      state.totalAmount = calculateTotalAmount(state);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId] > 1) {
        state.cartItems[itemId] -= 1;
      } else {
        delete state.cartItems[itemId];
      }
      state.totalAmount = calculateTotalAmount(state);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      state.totalAmount = calculateTotalAmount(state); 
    },
  },
});

const calculateTotalAmount = (state) => {
  let totalAmount = 0;
  for (const item in state.cartItems) {
    if (state.cartItems[item] > 0) {
      const itemInfo = state.food_list.find((product) => product._id === item);
      if (itemInfo) {
        totalAmount += itemInfo.price * state.cartItems[item];
      }
    }
  }
  return totalAmount;
};

export const { addToCart, removeFromCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
