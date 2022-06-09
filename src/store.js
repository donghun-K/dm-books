import { configureStore } from '@reduxjs/toolkit';
import cart from './store/cartSlice.js';
import watched from './store/watchedSlice.js';

export default configureStore({
  reducer: {
    cart: cart.reducer,
    watched: watched.reducer,
  },
});
