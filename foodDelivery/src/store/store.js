// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    authReducer
  },
});
